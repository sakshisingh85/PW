# 🔗 Link Shortener App

A modern, beautiful URL shortening application built with React. Transform your long URLs into compact, shareable links with a sleek and responsive design.

## ✨ Features

- **URL Shortening**: Convert long URLs into short, manageable links
- **Beautiful UI**: Modern gradient design with smooth animations
- **URL History**: View and manage your previously shortened URLs
- **Copy to Clipboard**: One-click copying of shortened URLs
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Local Storage**: URLs are saved locally for persistence
- **URL Validation**: Automatic validation and protocol handling
- **Redirect Functionality**: Short URLs redirect to original destinations

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🛠️ How It Works

### URL Shortening Process

1. **Input Validation**: The app validates the entered URL format
2. **Protocol Handling**: Automatically adds `https://` if no protocol is specified
3. **Short Code Generation**: Creates a unique 6-character alphanumeric code
4. **Storage**: Saves the URL mapping in browser's localStorage
5. **Display**: Shows the shortened URL with copy functionality

### Redirect Mechanism

- Short URLs follow the pattern: `yourdomain.com/r/SHORTCODE`
- The app looks up the original URL using the short code
- Automatic redirect to the original destination
- Error handling for invalid or expired links

## 📱 Usage

1. **Shorten a URL**:
   - Enter your long URL in the input field
   - Click "Shorten URL" or press Enter
   - Copy the generated short URL

2. **Manage URLs**:
   - View your URL history below the form
   - Copy any previously shortened URL
   - Delete URLs you no longer need

3. **Use Short URLs**:
   - Share the generated short URL
   - When clicked, it will redirect to the original URL

## 🎨 Design Features

- **Gradient Background**: Beautiful purple-blue gradient
- **Glass Morphism**: Semi-transparent elements with backdrop blur
- **Smooth Animations**: Hover effects and transitions
- **Responsive Layout**: Adapts to different screen sizes
- **Modern Typography**: Clean, readable fonts
- **Color-coded Actions**: Different colors for different button types

## 🔧 Technical Details

### Built With

- **React 19**: Latest React with hooks and modern patterns
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing for redirects
- **CSS3**: Modern styling with gradients and animations
- **LocalStorage**: Client-side data persistence

### Project Structure

```
src/
├── App.jsx          # Main application component
├── Redirect.jsx     # Redirect handling component
├── main.jsx         # Application entry point
├── App.css          # Main application styles
└── index.css        # Global styles
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy Options

- **Vercel**: Connect your GitHub repository for automatic deployment
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use the `gh-pages` package
- **Any Static Host**: Upload the `dist` folder contents

## 🔮 Future Enhancements

- [ ] Backend API integration for persistent storage
- [ ] User authentication and personal URL management
- [ ] URL analytics and click tracking
- [ ] Custom short codes
- [ ] QR code generation
- [ ] Bulk URL shortening
- [ ] API rate limiting
- [ ] URL expiration dates

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with React and Vite
- Inspired by popular URL shorteners like Bitly and TinyURL
- Modern UI design patterns and best practices

---

**Happy URL Shortening! 🎉**
