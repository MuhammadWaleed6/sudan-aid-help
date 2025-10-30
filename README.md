# Sudan Aid Platform 🇸🇩

A modern, responsive ReactJS web application dedicated to raising awareness and providing humanitarian assistance for the crisis in Sudan, particularly in North Darfur region.

## 🌟 Features

### Core Functionality
- **Responsive Design**: Mobile-first approach with Bootstrap 5
- **Interactive Map**: Leaflet-powered map showing crisis hotspots
- **Live Updates**: News feed with latest humanitarian reports
- **Donation Integration**: Multiple NGO partner links and donation forms
- **Volunteer Registration**: Comprehensive volunteer opportunity system
- **Media Gallery**: Filterable gallery with modal views
- **Dark/Light Mode**: Theme toggle for better accessibility

### Technical Features
- **React Router**: Client-side routing for SPA experience
- **React Hooks**: Modern functional components with state management
- **Bootstrap 5**: Responsive UI framework
- **Leaflet Maps**: Interactive mapping with custom markers
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Cards
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **Performance**: Lazy loading, optimized images, and efficient rendering

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd sudan-app
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
sudan-app/
├── public/
│   ├── index.html          # Main HTML template with SEO tags
│   ├── manifest.json       # PWA manifest
│   └── favicon.ico         # Site favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.js   # Navigation component
│   │   │   └── Footer.js   # Footer with contact info
│   │   └── sections/
│   │       ├── Hero.js     # Landing hero section
│   │       ├── About.js    # Crisis information
│   │       ├── LiveUpdates.js # News feed
│   │       ├── InteractiveMap.js # Crisis map
│   │       ├── Donation.js # Donation section
│   │       ├── Volunteer.js # Volunteer opportunities
│   │       └── Gallery.js  # Media gallery
│   ├── data/
│   │   └── mockData.js     # Mock data for development
│   ├── App.js              # Main application component
│   ├── App.css             # Custom styles and animations
│   └── index.js            # Application entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🎨 Design System

### Color Palette
- **Primary**: #0d6efd (Bootstrap Blue)
- **Success**: #198754 (Green for positive actions)
- **Danger**: #dc3545 (Red for urgent alerts)
- **Warning**: #ffc107 (Yellow for attention)
- **Secondary**: #6c757d (Gray for secondary content)

### Typography
- **Font Family**: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
- **Headings**: Bold weights with proper hierarchy
- **Body Text**: Regular weight with 1.6 line height for readability

### Components
- **Cards**: Rounded corners (12px) with subtle shadows
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Consistent styling with focus states
- **Navigation**: Fixed navbar with backdrop blur effect

## 🗺️ Interactive Map

The map component uses Leaflet to display:
- **Crisis Hotspots**: Color-coded markers (red=critical, orange=urgent, green=aid centers)
- **Displacement Data**: Population numbers and status information
- **Interactive Popups**: Detailed information on click
- **Legend**: Clear explanation of marker meanings

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: 768px - 992px
- **Large Desktop**: > 992px

## ♿ Accessibility Features

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard accessibility
- **Color Contrast**: WCAG AA compliant color combinations
- **Alt Text**: Descriptive alt text for all images
- **Focus Indicators**: Clear focus states for interactive elements

## 🔧 Available Scripts

- `npm start` - Runs development server
- `npm test` - Launches test runner
- `npm run build` - Builds for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `build` folder to Netlify
3. Configure redirects for React Router

### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect React and deploy

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json: `"homepage": "https://yourusername.github.io/sudan-app"`
3. Add scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d build"`
4. Deploy: `npm run deploy`

## 🔮 Future Enhancements

### Planned Features
- **Multilingual Support**: Arabic and French translations
- **Real-time Chat**: Support chat for immediate assistance
- **Payment Integration**: Stripe/PayPal for direct donations
- **Push Notifications**: Emergency alerts and updates
- **Offline Support**: PWA capabilities for offline access
- **Analytics Dashboard**: Impact tracking and reporting

### API Integrations
- **News APIs**: Reuters, BBC, or UN News feeds
- **Payment Processors**: Stripe, PayPal, or local payment gateways
- **Email Services**: SendGrid or Mailchimp for newsletters
- **Social Media**: Twitter API for real-time updates
- **Translation Services**: Google Translate API

### Performance Optimizations
- **Code Splitting**: Route-based code splitting
- **Image Optimization**: WebP format and responsive images
- **Caching**: Service worker implementation
- **CDN**: Content delivery network for static assets

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

For support and questions:
- **Email**: help@sudanaid.org
- **Emergency Hotline**: +1 (234) 567-8900
- **GitHub Issues**: Create an issue for technical problems

## 🙏 Acknowledgments

- **Bootstrap Team** for the excellent UI framework
- **Leaflet** for the mapping capabilities
- **Unsplash** for humanitarian crisis imagery
- **React Team** for the amazing framework
- **Humanitarian Organizations** working in Sudan

---

**Built with ❤️ for the people of Sudan**

*This platform aims to raise awareness and provide assistance for the humanitarian crisis in Sudan. Every contribution, whether through code, donations, or volunteering, makes a difference.*