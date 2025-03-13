# React Router Salon Website with Memory Game

A modern, interactive salon website built with React, featuring a memory card game. This project demonstrates advanced React Router implementation, state management, and interactive animations.

## 🚀 Features

- **Dynamic Routing**: Implemented using React Router v6
- **Interactive UI**: Modern, responsive design with Tailwind CSS
- **Memory Game**: Fun, interactive hairstyle matching game
- **Animations**: Smooth transitions and engaging visual effects
- **API Integration**: GitHub profile data fetching with loader optimization
- **Responsive Design**: Mobile-first approach with adaptive layouts

## 🎮 Memory Game

Test your memory with our hairstyle matching game:
- Match pairs of hairstyle cards
- Earn points for successful matches
- Track moves and optimize your score
- Enjoy beautiful animations and visual feedback

## 🛠️ Technologies Used

- React 18
- React Router v6
- Tailwind CSS
- JavaScript (ES6+)
- CSS3 Animations
- GitHub API

## 📦 Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd 07reactRouter
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

## 🔧 Project Structure

```
07reactRouter/
├── src/
│   ├── components/
│   │   ├── Home/
│   │   ├── About/
│   │   ├── Contact/
│   │   ├── Github/
│   │   ├── Game/
│   │   └── Header/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
└── package.json
```

## 📝 Component Details

### Main Components
- **Home**: Landing page with salon services
- **About**: Information about the salon
- **Contact**: Contact form and details
- **Github**: GitHub profile integration
- **Game**: Interactive memory matching game

### Game Features
- Card flipping animations
- Score tracking
- Move counter
- Match validation
- Victory celebration

## 🎨 Styling

- Tailwind CSS for utility-first styling
- Custom animations using CSS keyframes
- Consistent color scheme (slate and amber theme)
- Responsive design breakpoints

## 🔄 Routing System

```javascript
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="game" element={<StyleGame />} />
      <Route path="github" element={<Github />} loader={githubInfoLoader} />
    </Route>
  )
);
```

## 🎯 Key Features Explained

1. **Dynamic Routing**
   - Nested routes with Outlet
   - Parameter-based routing
   - Loader functions for data fetching

2. **State Management**
   - React hooks for local state
   - Efficient state updates
   - Proper cleanup implementation

3. **Performance Optimization**
   - Route-based code splitting
   - Optimized animations
   - Efficient re-rendering

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- React Router team for excellent documentation
- Tailwind CSS for the utility-first framework
- GitHub API for profile integration capabilities

## 🔮 Future Enhancements

- [ ] Add more interactive games
- [ ] Implement user authentication
- [ ] Add booking system
- [ ] Integrate payment processing
- [ ] Add more animations and transitions
- [ ] Implement service booking functionality

## 

## 🌟 Show your support

Give a ⭐️ if this project helped you!
