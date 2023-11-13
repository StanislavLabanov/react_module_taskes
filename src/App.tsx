import { FC } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Fetch from './pages/Fetch';
import Hover from './pages/Hover';
import LocalStorage from './pages/LocalStorage';
import Toggle from './pages/Toggle';
import ViewportSize from './pages/ViewportSize';
import WindowScroll from './pages/WindowScroll';
import Index from './pages/Index';

const App: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="fetch" element={<Fetch />} />
        <Route path="hover" element={<Hover />} />
        <Route path="local_storage" element={<LocalStorage />} />
        <Route path="toggle" element={<Toggle />} />
        <Route path="viewport_size" element={<ViewportSize />} />
        <Route path="window_scroll" element={<WindowScroll />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App