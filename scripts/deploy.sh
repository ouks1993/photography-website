#!/bin/bash
# Auto-deploy: runs on the EC2 server via cron; pulls and rebuilds
# when GitHub has new commits. Installed at /home/ubuntu/deploy.sh
export PATH=/usr/local/bin:/usr/bin:/bin
cd /home/ubuntu/photography-website || exit 1
git fetch origin main --quiet || exit 1
LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)
if [ "$LOCAL" != "$REMOTE" ]; then
  echo "[$(date)] New commit detected ($REMOTE), deploying..."
  git reset --hard origin/main
  npm install
  npm run build
  pm2 restart photography
  echo "[$(date)] Deploy finished."
fi
