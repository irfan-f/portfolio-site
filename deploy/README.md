# Deploy — Hostinger VPS (irfan-f.com)

Static build output (`dist/`) is served by nginx at `/var/www/portfolio-site`. **Deploy manually** from your machine via SSH/rsync as user **`deploy-portfolio`**.

Admin tasks (nginx, certbot, docker) use your normal VPS login (e.g. `irf`). Do not use `deploy-portfolio` for those.

GitHub Actions runs **build/tests on pull requests only** — it does not push to the VPS.

## Deploy (every release)

```bash
npm run build
rsync -avz --delete \
  -e "ssh -i ~/.ssh/id_ed25519_portfolio_deploy" \
  dist/ deploy-portfolio@YOUR_VPS_IP:/var/www/portfolio-site/
```

Replace `YOUR_VPS_IP` with the Hostinger VPS address.

## One-time VPS setup

Do **not** install `deploy/nginx/portfolio-site.conf` until Let's Encrypt certs exist — that file references `/etc/letsencrypt/live/irfan-f.com/` and `nginx -t` will fail without them.

### 1. Deploy user and web root

SSH as `irf` (or your admin user):

```bash
sudo adduser --disabled-password --gecos "" deploy-portfolio
sudo mkdir -p /home/deploy-portfolio/.ssh
sudo chmod 700 /home/deploy-portfolio/.ssh
```

On your Mac, create a deploy-only key:

```bash
ssh-keygen -t ed25519 -C "portfolio-deploy" -f ~/.ssh/id_ed25519_portfolio_deploy
```

On the VPS, add the public key:

```bash
sudo nano /home/deploy-portfolio/.ssh/authorized_keys
sudo chmod 600 /home/deploy-portfolio/.ssh/authorized_keys
sudo chown -R deploy-portfolio:deploy-portfolio /home/deploy-portfolio/.ssh
```

Create the web root:

```bash
sudo mkdir -p /var/www/portfolio-site
sudo chown deploy-portfolio:www-data /var/www/portfolio-site
sudo chmod 2775 /var/www/portfolio-site
```

Test SSH + write from your Mac:

```bash
ssh -i ~/.ssh/id_ed25519_portfolio_deploy deploy-portfolio@YOUR_VPS_IP \
  'touch /var/www/portfolio-site/.write-test && rm /var/www/portfolio-site/.write-test && echo ok'
```

### 2. Temporary HTTP nginx

Create `/etc/nginx/sites-available/portfolio-site` (HTTP only until TLS exists):

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name irfan-f.com www.irfan-f.com;

    root /var/www/portfolio-site;
    index index.html;

    location /assets/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    location /images/ {
        try_files $uri =404;
        add_header Cache-Control "public, max-age=604800";
    }

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

Enable and reload:

```bash
sudo ln -sf /etc/nginx/sites-available/portfolio-site /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

Confirm Mahjong is unchanged (`irfquake.tech` vhost is separate).

### 3. First manual deploy

Run the [Deploy](#deploy-every-release) commands above, then on the VPS:

```bash
ls -la /var/www/portfolio-site/
curl -I -H "Host: irfan-f.com" http://127.0.0.1/
```

### 4. Cloudflare DNS

1. Remove GitHub Pages `185.199.*` A records and any `www` CNAME to `*.github.io`.
2. Add `@` → **A** → VPS IPv4, and `www` → **A** (same IP) or **CNAME** → `irfan-f.com`.
3. For the first certificate, set both to **DNS only** (grey cloud).
4. Confirm propagation:

   ```bash
   dig +short irfan-f.com
   dig +short www.irfan-f.com
   ```

### 5. TLS on the VPS

```bash
sudo certbot --nginx -d irfan-f.com -d www.irfan-f.com
```

### 6. Install full nginx config

```bash
sudo cp deploy/nginx/portfolio-site.conf /etc/nginx/sites-available/portfolio-site
sudo nginx -t && sudo systemctl reload nginx
```

(Optional) Re-enable Cloudflare proxy (orange cloud) and set SSL/TLS to **Full (strict)**.

### 7. Verify and retire GitHub Pages

```bash
curl -I https://irfan-f.com
curl -I https://irfan-f.com/me
curl -I https://irfan-f.com/projects
```

Deep links must return `200` with SPA fallback, not `404`.

Disable GitHub Pages in repo settings after HTTPS works. Purge Cloudflare cache if the old site still appears.

## Troubleshooting

| Symptom | Likely fix |
|---------|------------|
| rsync permission denied | `deploy-portfolio` key in `authorized_keys`, path ownership |
| `nginx -t` fails on repo config | Run certbot first; use HTTP-only config until certs exist |
| certbot fails | DNS not on VPS yet, or Cloudflare proxied (orange cloud) during HTTP-01 |
| Old GitHub Pages content | DNS/cache; purge Cloudflare, check `dig` |
| `/me` returns 404 | Missing SPA `try_files`; reload nginx config |
