# Deploy — Hostinger VPS (irfan-f.com)

Static build output (`dist/`) is served by nginx at `/var/www/portfolio-site`. CI deploys on push to `main` via SSH/rsync.

## One-time VPS setup

1. Create deploy directory:
   ```bash
   sudo mkdir -p /var/www/portfolio-site
   sudo chown "$USER":"$USER" /var/www/portfolio-site
   ```

2. Install nginx site config:
   ```bash
   sudo cp deploy/nginx/portfolio-site.conf /etc/nginx/sites-available/portfolio-site
   sudo ln -sf /etc/nginx/sites-available/portfolio-site /etc/nginx/sites-enabled/
   sudo nginx -t && sudo systemctl reload nginx
   ```

3. TLS (after DNS points to this VPS):
   ```bash
   sudo certbot --nginx -d irfan-f.com -d www.irfan-f.com
   ```

4. GitHub repository secrets:
   - `HOSTINGER_SSH_HOST` — VPS hostname or IP
   - `HOSTINGER_SSH_USER` — SSH user (e.g. `root` or deploy user)
   - `HOSTINGER_SSH_KEY` — private key (full PEM)
   - `HOSTINGER_DEPLOY_PATH` — `/var/www/portfolio-site`

## DNS cutover

| Record | Type | Value |
|--------|------|--------|
| `@` | A | VPS public IPv4 |
| `www` | A or CNAME | same IP, or CNAME → `irfan-f.com` |

Remove GitHub Pages `185.199.*` A records and any `gh-pages` CNAME. Disable GitHub Pages in repo settings after the first successful VPS deploy.

## Manual deploy

```bash
npm run build
rsync -avz --delete dist/ user@your-vps:/var/www/portfolio-site/
```

## Verify

```bash
curl -I https://irfan-f.com
curl -I https://irfan-f.com/me
curl -I https://irfan-f.com/projects
```

Deep links must return `200` with `index.html` (SPA fallback), not `404`.
