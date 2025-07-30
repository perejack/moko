import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from './pages/Index';
import SofaDetails from './pages/SofaDetails';
import MattressDetails from './pages/MattressDetails';
import Beds from './pages/Beds';
import BedDetails from './pages/BedDetails';
import Mattresses from "./pages/Mattresses";
import TvStands from "./pages/TvStands";
import { CartProvider } from "./context/CartContext";
import TvStandDetails from "./pages/TvStandDetails";
import Carpets from "./pages/Carpets";
import CarpetDetails from "./pages/CarpetDetails";
import NotFound from "./pages/NotFound";
import CoffeeTables from "./pages/CoffeeTables";
import CoffeeTableDetails from "./pages/CoffeeTableDetails";
import LandingClone from "./pages/LandingClone";
import Cart from "./pages/Cart";
import Pouff from "./pages/Pouff";
import Footstool from "./pages/Footstool";
import Ottoman from "./pages/Ottoman";
import ThrowPillow from "./pages/ThrowPillow";
import AdminDashboard from "./pages/AdminDashboard";

const queryClient = new QueryClient();

const App = () => (
  <CartProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<LandingClone />} />
          <Route path="/mattresses" element={<Mattresses />} />
          <Route path="/beds" element={<Beds />} />
          <Route path="/beds/:slug" element={<BedDetails />} />
          <Route path="/coffee-tables" element={<CoffeeTables />} />
          <Route path="/coffee-tables/:slug" element={<CoffeeTableDetails />} />
          <Route path="/tv-stands" element={<TvStands />} />
          <Route path="/tv-stands/:slug" element={<TvStandDetails />} />
          <Route path="/carpets" element={<Carpets />} />
          <Route path="/carpets/:slug" element={<CarpetDetails />} />
          <Route path="/clone" element={<LandingClone />} />
          <Route path="/sofas" element={<Index />} />
          <Route path="/sofas/:slug" element={<SofaDetails />} />
          <Route path="/mattresses/:slug" element={<MattressDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/accessories/pouff" element={<Pouff />} />
          <Route path="/accessories/footstool" element={<Footstool />} />
          <Route path="/accessories/ottoman" element={<Ottoman />} />
          <Route path="/accessories/throw-pillow" element={<ThrowPillow />} />
          <Route path="/admin" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  </CartProvider>
);

export default App;
