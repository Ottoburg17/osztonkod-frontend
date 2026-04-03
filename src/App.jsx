
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import AuthModal from "./components/AuthModal";
import About from "./pages/About";
import InstinctsArticle from "./pages/InstinctsArticle";
import DeepUnderstand from "./pages/DeepUnderstand";
import Schemas from "./pages/Schemas";
import SchemaDetail from "./pages/SchemaDetail";
import Contact from "./pages/Contact";
import SocialProof from "./pages/SocialProof";
import FeedbackForm from "./pages/FeedbackForm";
import FeedbackSuccess from "./pages/FeedbackSuccess";
import Blog from "./components/Blog";
import BlogPost from "./components/BlogPost";
import Footer from "./components/Footer";
import Services from "./pages/Services";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import MyPatterns from "./pages/MyPatterns.jsx";
import Dashboard from "./pages/Dashboard";
import BrainMap from "./pages/BrainMap.jsx";
import EmotionalBrainMap from "./pages/EmotionalBrainMap";
import InnerLoop from "./pages/InnerLoop.jsx";
import Checkout from "./pages/Checkout";
import VerifyEmail from "./pages/VerifyEmail";
import ResendVerification from "./pages/ResendVerification";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import InnerBarrier from "./pages/InnerBarrier";
import LoopRecognitionMobile from "./pages/LoopRecognitionMobile.jsx";
import InstinctAware from "./pages/InstinctAware";
import CookieBanner from "./components/CookieBanner";
import { getConsent } from "./cookieConsent";
import ProtectedSubscriptionRoute from "./components/ProtectedSubscriptionRoute.jsx";
import ReactionProgram from "./pages/ReactionProgram";
import ReactionProgramUpsell from "./components/ReactionProgramUpsell";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import StruggleBreakerPage from "./pages/StruggleBreakerPage";
import ProtectedStruggleBreakerRoute from "./components/ProtectedStruggleBreakerRoute";
import Plan from "./pages/Plan.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Account from "./pages/Account";
import Orders from "./pages/Orders";
import SafeProductRoute from "./SafeProductRoute.jsx";
import ProtectedProductRoute from "./components/ProtectedProductRoute.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import OrderDetails from "./pages/OrderDetails";
import Perception from "./pages/Perception.jsx";
import DopamineCyclePage from "./pages/DopamineCyclePage";
import EmotionalReleaseProgram from "./pages/EmotionalReleaseProgram.jsx";
import Disclaimer from "./pages/Disclaimer.jsx";
import SubscriptionPolicy from "./pages/SubscriptionPolicy.jsx";
import Invoices from "./pages/Invoices.jsx";
import AutomaticThinking from "./pages/AutomaticThinking.jsx";
import TestPage from "./pages/TestPage";
import AnalyticsListener from "./analytics/AnalyticsListener";
import { loadAnalytics } from "./analytics/loadAnalytics";
import BillingPage from "./pages/BillingPage";
import PaymentSuccess from "./pages/PaymentSuccess";
import StripeCancel from "./pages/StripeCancel.jsx";
import StripeSuccess from "./pages/StripeSuccess.jsx";
import WhyItWorks from "./sections/WhyItWorks.jsx";

/*  Admin   */
import Admin from "./pages/Admin";
import AdminOrders from "./pages/admin/AdminOrders.jsx";
import AdminSubscriptions from "./pages/admin/AdminSubscriptions.jsx";
import AdminInvoices from "./pages/admin/AdminInvoices.jsx";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";
import AdminRoute from "./routes/AdminRoute";
import AdminInvoicesList from "./pages/admin/AdminInvoicesList.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminManualInvoice from "./pages/admin/AdminManualInvoice.jsx";




function App() {

  const location = useLocation();

  const hideFooterRoutes = ["/cart", "/checkout"];

  const shouldHideFooter = hideFooterRoutes.includes(location.pathname);


  useEffect(() => {
    const consent = getConsent();
    if (consent?.analytics === true) {
      loadAnalytics();
    }

    }, []);

return (
   <>     
      <Navbar />
      <AuthModal />
      <AnalyticsListener />
      <ScrollToTop />


      <div className="min-h-screen flex flex-col">
          <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/instinctsarticle" element={<InstinctsArticle />} />
          <Route path="/innerbarrier" element={<InnerBarrier />} />
          <Route path="/instinctaware" element={<InstinctAware />} />
          <Route path="/deepunderstand" element={<DeepUnderstand />} />
          <Route path="/resend-verification" element={<ResendVerification />}/>
          <Route path="/schemas" element={<Schemas />} />
          <Route path="/schemas/:schemaId" element={<SchemaDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/looprecognitionmobile" element={<LoopRecognitionMobile />} />
          <Route path="/felhasznalasi-feltetelek" element={<Terms />} />
          <Route path="/socialproof" element={<SocialProof />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/whyitworks" element={<WhyItWorks />} />
          <Route path="/my-patterns" element={<MyPatterns />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/adatkezeles" element={<PrivacyPolicy /> } />
          <Route path="/test" element={<TestPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/jogi/elofizetes" element={<SubscriptionPolicy />} />
          <Route path="/feedback-success" element={<FeedbackSuccess />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />
          <Route path="/plan" element={<Plan />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/innerloop" element={<InnerLoop />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/stripe/success" element={<StripeSuccess />} />
          <Route path="/stripe/cancel" element={<StripeCancel />} />
          


          {/* 🔁 UPSELL OLDAL */}
          <Route
            path="/reaction-program-offer"
            element={
              <main className="flex justify-center py-4 pt-24"> 
                <ReactionProgramUpsell />
              </main>
            }
          />


          {/* 🔒 FIZETŐS PROGRAM */}
         <Route
          path="/dashboard/reaction-program"
          element={
            <ProtectedProductRoute slug="reaction-program">
              <ReactionProgram />
            </ProtectedProductRoute>
          }
        />

          {/* 🔐 BEJELENTKEZETT USER */}
          <Route
            path="/dashboard/*"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

           <Route
            path="/brainmap"
            element={
              <ProtectedProductRoute slug="brainmap">
                <BrainMap />
              </ProtectedProductRoute>
            }
          />

          <Route
            path="/emotional-brainmap"
            element={
              <ProtectedProductRoute slug="emotional-brainmap">
                <EmotionalBrainMap />
              </ProtectedProductRoute>
            }
          />

          <Route
            path="/perception"
            element={
              <ProtectedProductRoute slug="perception">
                <Perception />
              </ProtectedProductRoute>
            }
          />


	
           <Route
              path="/automatic-thinking"
              element={
                <ProtectedProductRoute slug="automatic-thinking">
                  <AutomaticThinking />
                </ProtectedProductRoute>
              }
            />

            <Route
              path="/emotional-release-program"
              element={
                <ProtectedProductRoute slug="emotional-release-program">
                  <EmotionalReleaseProgram />
                </ProtectedProductRoute>
              }
            />



          <Route
            path="/dashboard/dopamine-cycle"
            element={
              <ProtectedSubscriptionRoute slug="dopamine-cycle">
                <DopamineCyclePage />
              </ProtectedSubscriptionRoute>
            }
          />

          <Route
            path="/dashboard/struggle-breaker"
            element={
              <ProtectedStruggleBreakerRoute>
                <StruggleBreakerPage />
              </ProtectedStruggleBreakerRoute>
            }
          />


          <Route
              path="/account"
              element={
                <ProtectedRoute>
                  <Account />
                </ProtectedRoute>
              }
          />

          <Route
            path="/account/billing"
            element={
              <ProtectedRoute>
                <BillingPage />
              </ProtectedRoute>
            }
          />

                   <Route
              path="/invoices"
              element={
                <ProtectedRoute>
                  <Invoices />
                </ProtectedRoute>
              }
            />  

          <Route
            path="/orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />

          <Route
            path="/orders/:id"
            element={
              <ProtectedRoute>
                <OrderDetails />
              </ProtectedRoute>
            }
          />
          
          {/* 🔐 ADMIN */}
          <Route
              path="/admin"
              element={
                <AdminRoute>
                  <Admin />
                </AdminRoute>
              }
            >

             
           <Route index element={<AdminDashboard />} />
              <Route path="dashboard" element={<AdminDashboard />} />
              
              <Route path="orders" element={<AdminOrders />} />
              <Route path="orders/:id" element={<AdminOrderDetails />} />
              <Route path="subscriptions" element={<AdminSubscriptions />} />
              <Route path="invoices" element={<AdminInvoices />} />
              <Route path="invoices-list" element={<AdminInvoicesList />} />
              <Route path="/admin/manual-invoice" element={<AdminManualInvoice />} />
            </Route>    

          <Route
            path="/products/:slug"
            element={
              <SafeProductRoute>
                <ProductDetail />
              </SafeProductRoute>
            }
          />

        </Routes>
      </main>

    
     
       {!shouldHideFooter && <Footer />}

      </div>
     

       {/* ✅ COOKIE BANNER A LAYOUTON KÍVÜL */}
      <CookieBanner />
     </>

  
  );
}

export default App;

