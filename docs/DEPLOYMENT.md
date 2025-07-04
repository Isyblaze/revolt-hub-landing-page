# Deployment Guide

This guide covers different deployment options for the Revolt Hub application.

## 🚀 Quick Deploy with Lovable

The easiest way to deploy your Revolt Hub is through Lovable's built-in deployment:

1. Open your project in [Lovable](https://lovable.dev)
2. Click the **Publish** button in the top right
3. Your app will be automatically deployed to `yourapp.lovable.app`

### Custom Domain with Lovable
1. Go to Project → Settings → Domains
2. Click "Connect Domain"
3. Follow the DNS configuration instructions
4. Your app will be available at your custom domain

*Note: Custom domains require a paid Lovable plan*

## 🔧 Manual Deployment Options

### Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Follow the prompts**:
- Link to existing project or create new
- Set build command: `npm run build`
- Set output directory: `dist`

### Netlify

1. **Build the project**:
```bash
npm run build
```

2. **Deploy via Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

Or drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop).

### GitHub Pages

1. **Install gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Add to package.json**:
```json
{
  "homepage": "https://yourusername.github.io/revolt-hub",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

### Docker Deployment

1. **Create Dockerfile**:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

2. **Create nginx.conf**:
```nginx
events {}
http {
    include /etc/nginx/mime.types;
    server {
        listen 80;
        root /usr/share/nginx/html;
        index index.html;
        
        location / {
            try_files $uri $uri/ /index.html;
        }
    }
}
```

3. **Build and run**:
```bash
docker build -t revolt-hub .
docker run -p 8080:80 revolt-hub
```

## 🌍 Environment Configuration

### Environment Variables

Create `.env.production` for production-specific variables:

```env
VITE_APP_TITLE=Revolt Hub
VITE_API_URL=https://api.revoltsrc.online
VITE_SOCIAL_URL=https://social.revoltsrc.online
VITE_GAMING_URL=https://play.revoltsrc.online
VITE_FINTECH_URL=https://wallet.revoltsrc.online
```

### Build Optimization

For production builds, ensure optimal performance:

```bash
# Build with production optimizations
npm run build

# Preview the production build locally
npm run preview
```

## 🔒 Security Considerations

### HTTPS
- Always use HTTPS in production
- Most modern deployment platforms provide SSL certificates automatically

### Content Security Policy
Add CSP headers for enhanced security:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:;">
```

### Performance
- Enable gzip compression
- Use CDN for static assets
- Implement proper caching headers

## 📊 Monitoring and Analytics

### Basic Monitoring
Consider adding:
- Google Analytics or similar
- Error tracking (Sentry)
- Performance monitoring
- Uptime monitoring

### Performance Metrics
Monitor:
- Core Web Vitals
- Load times
- Bundle size
- User engagement

## 🔄 CI/CD Pipeline

### GitHub Actions Example

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 🚨 Troubleshooting

### Common Issues

**Build Failures**:
- Check Node.js version (requires v16+)
- Clear node_modules and reinstall
- Check for TypeScript errors

**Routing Issues**:
- Configure your server for SPA routing
- Ensure fallback to index.html for 404s

**Asset Loading**:
- Check asset paths are correct
- Ensure proper MIME types
- Verify CORS settings if needed

### Performance Issues
- Analyze bundle with `npm run build -- --analyze`
- Check for large dependencies
- Implement code splitting if needed

## 📋 Deployment Checklist

Before deploying to production:

- [ ] Run `npm run build` successfully
- [ ] Test the production build locally with `npm run preview`
- [ ] Verify all routes work correctly
- [ ] Check responsive design on multiple devices
- [ ] Test all interactive elements
- [ ] Verify external links work
- [ ] Check loading performance
- [ ] Ensure proper error handling
- [ ] Test accessibility features
- [ ] Verify SEO meta tags

---

For any deployment issues, check the [troubleshooting guide](./TROUBLESHOOTING.md) or reach out to support@revoltsrc.online.