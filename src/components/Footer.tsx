import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <div className="flex">
      <div className="w-svw flex space-x-4 justify-center">
        <div className="col col-lg-auto">
          <strong>Irfan Filipovic</strong>
        </div>
        <div className="col col-lg-auto">
          <button type="button"><a href="https://github.com/irfan-f" target="_blank"
            rel="noopener noreferrer"><strong>&middot; GitHub &middot;</strong></a></button>
        </div>
        <div className="col col-lg-auto">
          <button type="button"><a href="https://www.linkedin.com/in/irfan-filipovic/" target="_blank"
            rel="noopener noreferrer"><strong>&middot; Linkedin &middot;</strong></a></button>
        </div>
      </div>
    </div>
  );
};

export default Footer;

