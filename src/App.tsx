import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Play, 
  Shield, 
  Zap, 
  Eye, 
  Users, 
  Globe, 
  Award, 
  MapPin, 
  Mail, 
  Phone, 
  Send,
  CheckCircle,
  AlertCircle,
  Cpu,
  Camera,
  Wifi,
  BarChart3,
  Target,
  Waves,
  Trash2,
  Bot,
  ArrowRight,
  Star,
  TrendingUp,
  Clock,
  Battery,
  Navigation,
  Gauge,
  Settings,
  Monitor,
  Smartphone,
  Cloud,
  Lock,
  Headphones,
  MessageSquare,
  Calendar,
  FileText,
  Download,
  ExternalLink,
  ChevronRight,
  Lightbulb,
  Rocket,
  Heart,
  Leaf,
  Fish,
  TreePine,
  Recycle,
  Sun,
  Wind,
  Thermometer,
  Droplets,
  Mountain,
  Building,
  Factory,
  Truck,
  Ship,
  Plane,
  Car,
  Bike,
  Train,
  Bus,
  Fuel,
  Zap as Lightning,
  Home,
  School,
  Hospital,
  Store,
  Church,
  Library,
  Museum,
  Theater,
  Stadium,
  Park,
  Beach,
  Forest,
  Lake,
  River,
  Ocean,
  Island,
  Volcano,
  Desert,
  Snowflake,
  Rainbow,
  Sunrise,
  Sunset,
  Moon,
  Stars,
  Cloudy,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Umbrella,
  Glasses,
  Watch,
  Shirt,
  Shoes,
  Hat,
  Bag,
  Book,
  Pen,
  Scissors,
  Ruler,
  Calculator,
  Computer,
  Keyboard,
  Mouse,
  Printer,
  Scanner,
  Webcam,
  Microphone,
  Speaker,
  Radio,
  Television,
  Camera as CameraIcon,
  Video,
  Music,
  Volume,
  VolumeX,
  Volume1,
  Volume2,
  Pause,
  Stop,
  SkipBack,
  SkipForward,
  Repeat,
  Shuffle,
  List,
  Grid,
  Filter,
  Search,
  Sort,
  Edit,
  Delete,
  Save,
  Copy,
  Cut,
  Paste,
  Undo,
  Redo,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Link,
  Unlink,
  Image,
  Table,
  Code,
  Quote,
  Heading,
  Paragraph,
  ListOrdered,
  ListUnordered,
  Indent,
  Outdent,
  Superscript,
  Subscript,
  Strikethrough,
  Highlight,
  FontSize,
  FontFamily,
  TextColor,
  BackgroundColor,
  BorderColor,
  BorderWidth,
  BorderStyle,
  Padding,
  Margin,
  Width,
  Height,
  Rotate,
  Scale,
  Move,
  Resize,
  Crop,
  Flip,
  Mirror,
  Brightness,
  Contrast,
  Saturation,
  Hue,
  Blur,
  Sharpen,
  Noise,
  Vintage,
  Sepia,
  Grayscale,
  Invert,
  Pixelate,
  Mosaic,
  Emboss,
  EdgeDetect,
  Posterize,
  Solarize,
  Threshold,
  Levels,
  Curves,
  ColorBalance,
  HueSaturation,
  ChannelMixer,
  SelectiveColor,
  PhotoFilter,
  ShadowHighlight,
  Vibrance,
  Clarity,
  Dehaze,
  Vignette,
  ChromaticAberration,
  LensDistortion,
  PerspectiveCorrection,
  KeystoneCorrection,
  LensFlare,
  Bokeh,
  DepthOfField,
  MotionBlur,
  RadialBlur,
  ZoomBlur,
  SpinBlur,
  SmartBlur,
  SurfaceBlur,
  MedianFilter,
  DustAndScratches,
  ReduceNoise,
  Despeckle,
  Unsharp,
  HighPass,
  GaussianBlur,
  BoxBlur,
  StackBlur,
  FastBlur,
  MotionDetection,
  FaceDetection,
  ObjectDetection,
  TextRecognition,
  BarcodeScanner,
  QRCodeScanner,
  Fingerprint,
  FaceID,
  TouchID,
  VoiceRecognition,
  SpeechToText,
  TextToSpeech,
  Translation,
  Dictionary,
  Thesaurus,
  Encyclopedia,
  Wikipedia,
  Google,
  YouTube,
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Pinterest,
  Snapchat,
  TikTok,
  WhatsApp,
  Telegram,
  Discord,
  Slack,
  Zoom,
  Skype,
  Teams,
  Meet,
  Hangouts,
  FaceTime,
  Messenger,
  Signal,
  Viber,
  WeChat,
  Line,
  KakaoTalk,
  Kik,
  GroupMe,
  Marco,
  Houseparty,
  Clubhouse,
  Spaces,
  Periscope,
  Twitch,
  Mixer,
  Steam,
  Epic,
  Origin,
  Uplay,
  BattleNet,
  GOG,
  Itch,
  Humble,
  GamePass,
  PlayStation,
  Xbox,
  Nintendo,
  Switch,
  Wii,
  DS,
  PSP,
  Vita,
  Android,
  iOS,
  Windows,
  macOS,
  Linux,
  Ubuntu,
  Debian,
  CentOS,
  RedHat,
  SUSE,
  Fedora,
  Arch,
  Gentoo,
  FreeBSD,
  OpenBSD,
  NetBSD,
  Solaris,
  AIX,
  HPUX,
  Chrome,
  Firefox,
  Safari,
  Edge,
  Opera,
  Brave,
  Vivaldi,
  Tor,
  IE,
  Netscape,
  Mosaic,
  Lynx,
  Links,
  w3m,
  elinks,
  curl,
  wget,
  aria2,
  youtube_dl,
  ffmpeg,
  vlc,
  mplayer,
  mpv,
  kodi,
  plex,
  emby,
  jellyfin,
  netflix,
  hulu,
  amazon,
  disney,
  hbo,
  showtime,
  starz,
  cinemax,
  epix,
  paramount,
  peacock,
  appletv,
  crunchyroll,
  funimation,
  vrv,
  roosterteeth,
  twitch as TwitchIcon,
  mixer as MixerIcon,
  steam as SteamIcon,
  epic as EpicIcon,
  origin as OriginIcon,
  uplay as UplayIcon,
  battlenet as BattleNetIcon,
  gog as GOGIcon,
  itch as ItchIcon,
  humble as HumbleIcon,
  gamepass as GamePassIcon,
  playstation as PlayStationIcon,
  xbox as XboxIcon,
  nintendo as NintendoIcon
} from 'lucide-react';
import { useLanguage } from './hooks/useLanguage';
import LanguageSelector from './components/LanguageSelector';
import LiveBeachMonitoring from './components/LiveBeachMonitoring';
import LiveStats from './components/LiveStats';
import VisitorCounter from './components/VisitorCounter';
import TechnicalSpecs from './components/TechnicalSpecs';
import Robot3DViewer from './components/Robot3DViewer';
import VirtualBeachTour from './components/VirtualBeachTour';

function App() {
  const { currentLanguage, changeLanguage, t, isRTL } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const [isDemoFormOpen, setIsDemoFormOpen] = useState(false);
  const [is3DViewerOpen, setIs3DViewerOpen] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [demoForm, setDemoForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    location: '',
    message: ''
  });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [demoStatus, setDemoStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'how-it-works', 'tech-specs', 'impact', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactStatus('sending');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success (in real app, handle actual API response)
    setContactStatus('success');
    setContactForm({ name: '', email: '', company: '', message: '' });
    
    setTimeout(() => {
      setContactStatus('idle');
      setIsContactFormOpen(false);
    }, 3000);
  };

  const handleDemoSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setDemoStatus('sending');
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success (in real app, handle actual API response)
    setDemoStatus('success');
    setDemoForm({ name: '', email: '', company: '', phone: '', location: '', message: '' });
    
    setTimeout(() => {
      setDemoStatus('idle');
      setIsDemoFormOpen(false);
    }, 3000);
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'tech-specs':
        return <TechnicalSpecs />;
      case 'virtual-tour':
        return <VirtualBeachTour />;
      default:
        return (
          <>
            {/* Hero Section */}
            <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
              {/* Background */}
              <div className="absolute inset-0">
                <img 
                  src="https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" 
                  alt="Beautiful beach coastline"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-sky-800/70 to-blue-900/80"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="animate-fade-in-up">
                  <h1 className={`text-5xl md:text-7xl font-bold text-white mb-6 ${isRTL ? 'font-arabic' : ''}`}>
                    {t.hero.title}
                    <br />
                    <span className="text-gradient bg-gradient-to-r from-sky-300 to-blue-300 bg-clip-text text-transparent">
                      {t.hero.subtitle}
                    </span>
                  </h1>
                  <p className="text-xl md:text-2xl text-sky-100 mb-8 max-w-4xl mx-auto leading-relaxed">
                    {t.hero.description}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                      onClick={() => setIsDemoFormOpen(true)}
                      className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
                    >
                      <Calendar className="w-5 h-5" />
                      <span>{t.hero.requestDemo}</span>
                    </button>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center space-x-2"
                    >
                      <ArrowRight className="w-5 h-5" />
                      <span>{t.hero.learnMore}</span>
                    </button>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                  <ChevronDown className="w-8 h-8 text-white/60" />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute top-20 left-10 w-20 h-20 bg-sky-400/20 rounded-full blur-xl animate-pulse"></div>
              <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
            </section>

            {/* Live Stats Section */}
            <section className="py-12 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <LiveBeachMonitoring />
                  </div>
                  <div className="space-y-6">
                    <LiveStats />
                    <VisitorCounter />
                  </div>
                </div>
              </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.about.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="relative">
                    <img 
                      src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop" 
                      alt="Labib-Bot on beach"
                      className="rounded-2xl shadow-2xl"
                    />
                    <button
                      onClick={() => setIs3DViewerOpen(true)}
                      className="absolute inset-0 bg-black/40 hover:bg-black/30 transition-all duration-300 rounded-2xl flex items-center justify-center group"
                    >
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                        <Bot className="w-12 h-12 text-white" />
                      </div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-xl font-bold mb-2">View 3D Model</h3>
                        <p className="text-sm opacity-90">Interactive 3D visualization of Labib-Bot</p>
                      </div>
                    </button>
                  </div>

                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-xl">
                        <Eye className="w-8 h-8 text-orange-500 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.capabilities.detection.title}</h3>
                        <p className="text-gray-600 text-sm">{t.capabilities.detection.description}</p>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-6 rounded-xl">
                        <Users className="w-8 h-8 text-blue-500 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.capabilities.monitoring.title}</h3>
                        <p className="text-gray-600 text-sm">{t.capabilities.monitoring.description}</p>
                      </div>

                      <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl">
                        <Zap className="w-8 h-8 text-green-500 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.capabilities.alerts.title}</h3>
                        <p className="text-gray-600 text-sm">{t.capabilities.alerts.description}</p>
                      </div>

                      <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-6 rounded-xl">
                        <Cpu className="w-8 h-8 text-purple-500 mb-4" />
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{t.capabilities.ai.title}</h3>
                        <p className="text-gray-600 text-sm">{t.capabilities.ai.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* How It Works Section */}
            <section id="how-it-works" className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.howItWorks.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.howItWorks.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-sky-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.steps.detection.title}</h3>
                    <p className="text-gray-600">{t.steps.detection.description}</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Navigation className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.steps.navigation.title}</h3>
                    <p className="text-gray-600">{t.steps.navigation.description}</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Zap className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.steps.alert.title}</h3>
                    <p className="text-gray-600">{t.steps.alert.description}</p>
                  </div>

                  <div className="text-center group">
                    <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{t.steps.reporting.title}</h3>
                    <p className="text-gray-600">{t.steps.reporting.description}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Impact Section */}
            <section id="impact" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.impact.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.impact.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl text-center">
                    <Waves className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.impact.cleaner.title}</h3>
                    <p className="text-gray-600">{t.impact.cleaner.description}</p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-sky-50 p-8 rounded-2xl text-center">
                    <Users className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.impact.behavior.title}</h3>
                    <p className="text-gray-600">{t.impact.behavior.description}</p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-8 rounded-2xl text-center">
                    <Globe className="w-16 h-16 text-purple-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.impact.scalable.title}</h3>
                    <p className="text-gray-600">{t.impact.scalable.description}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.techStack.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.techStack.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Cpu className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">NVIDIA Jetson</h3>
                    <p className="text-gray-600 text-sm">{t.techStack.nvidia}</p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Eye className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">YOLOv11-pose</h3>
                    <p className="text-gray-600 text-sm">{t.techStack.yolo}</p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <BarChart3 className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Web Dashboard</h3>
                    <p className="text-gray-600 text-sm">{t.techStack.dashboard}</p>
                  </div>

                  <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                    <Wifi className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Wi-Fi</h3>
                    <p className="text-gray-600 text-sm">{t.techStack.wifi}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Achievements Section */}
            <section className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.achievements.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.achievements.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center p-8 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl">
                    <Award className="w-16 h-16 text-yellow-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.achievements.award.title}</h3>
                    <p className="text-gray-600">{t.achievements.award.description}</p>
                  </div>

                  <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.achievements.tested.title}</h3>
                    <p className="text-gray-600">{t.achievements.tested.description}</p>
                  </div>

                  <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-sky-50 rounded-2xl">
                    <Rocket className="w-16 h-16 text-blue-500 mx-auto mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{t.achievements.ready.title}</h3>
                    <p className="text-gray-600">{t.achievements.ready.description}</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Company Section */}
            <section className="py-20 bg-gray-50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">{t.company.title}</h2>
                    <div className="bg-sky-100 p-4 rounded-lg mb-6">
                      <h3 className="font-semibold text-sky-800 mb-2">{t.company.mission.label}</h3>
                      <p className="text-sky-700">{t.company.mission.text}</p>
                    </div>
                    <p className="text-gray-600 mb-8 leading-relaxed">{t.company.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="text-center p-4 bg-white rounded-lg shadow">
                        <MapPin className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{t.company.location}</div>
                      </div>
                      <div className="text-center p-4 bg-white rounded-lg shadow">
                        <Globe className="w-8 h-8 text-green-500 mx-auto mb-2" />
                        <div className="font-semibold text-gray-900">{t.company.impact}</div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.company.whyChoose.title}</h3>
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <Cpu className="w-8 h-8 text-blue-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t.company.whyChoose.ai.title}</h4>
                          <p className="text-gray-600">{t.company.whyChoose.ai.description}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <CheckCircle className="w-8 h-8 text-green-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t.company.whyChoose.proven.title}</h4>
                          <p className="text-gray-600">{t.company.whyChoose.proven.description}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <MapPin className="w-8 h-8 text-orange-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t.company.whyChoose.expertise.title}</h4>
                          <p className="text-gray-600">{t.company.whyChoose.expertise.description}</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <TrendingUp className="w-8 h-8 text-purple-500 flex-shrink-0 mt-1" />
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">{t.company.whyChoose.scalable.title}</h4>
                          <p className="text-gray-600">{t.company.whyChoose.scalable.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
                  <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.contact.description}</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.info.title}</h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <Mail className="w-6 h-6 text-blue-500" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.contact.info.email}</div>
                          <div className="text-gray-600">contact@plastifind.com</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <Phone className="w-6 h-6 text-green-500" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.contact.info.phone}</div>
                          <div className="text-gray-600">+216 XX XXX XXX</div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <MapPin className="w-6 h-6 text-orange-500" />
                        <div>
                          <div className="font-semibold text-gray-900">{t.contact.info.location}</div>
                          <div className="text-gray-600">{t.contact.info.locationValue}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl">
                      <h4 className="font-semibold text-gray-900 mb-4">Quick Actions</h4>
                      <div className="space-y-3">
                        <button
                          onClick={() => setIsDemoFormOpen(true)}
                          className="w-full bg-sky-500 hover:bg-sky-600 text-white px-4 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
                        >
                          <Calendar className="w-5 h-5" />
                          <span>{t.nav.requestDemo}</span>
                        </button>
                        <button
                          onClick={() => scrollToSection('tech-specs')}
                          className="w-full bg-white hover:bg-gray-50 text-gray-700 px-4 py-3 rounded-lg font-medium transition-colors border border-gray-200 flex items-center justify-center space-x-2"
                        >
                          <FileText className="w-5 h-5" />
                          <span>{t.nav.techSpecs}</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 rounded-2xl">
                    <form onSubmit={handleContactSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.name}
                        </label>
                        <input
                          type="text"
                          required
                          value={contactForm.name}
                          onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder={t.contact.form.namePlaceholder}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.email}
                        </label>
                        <input
                          type="email"
                          required
                          value={contactForm.email}
                          onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder={t.contact.form.emailPlaceholder}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.company}
                        </label>
                        <input
                          type="text"
                          value={contactForm.company}
                          onChange={(e) => setContactForm({...contactForm, company: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder={t.contact.form.companyPlaceholder}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t.contact.form.message}
                        </label>
                        <textarea
                          required
                          rows={4}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                          placeholder={t.contact.form.messagePlaceholder}
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={contactStatus === 'sending'}
                        className="w-full bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                      >
                        {contactStatus === 'sending' ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                            <span>{t.contact.sending}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>{t.contact.send}</span>
                          </>
                        )}
                      </button>

                      {contactStatus === 'success' && (
                        <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                          <CheckCircle className="w-5 h-5" />
                          <span>{t.contact.success}</span>
                        </div>
                      )}

                      {contactStatus === 'error' && (
                        <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                          <AlertCircle className="w-5 h-5" />
                          <span>{t.contact.error}</span>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className={`min-h-screen bg-white ${isRTL ? 'rtl' : 'ltr'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PlastiFind</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: t.nav.home },
                { id: 'about', label: t.nav.about },
                { id: 'how-it-works', label: t.nav.howItWorks },
                { id: 'tech-specs', label: t.nav.techSpecs },
                { id: 'virtual-tour', label: 'Virtual Tour' },
                { id: 'impact', label: t.nav.impact },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'tech-specs' || item.id === 'virtual-tour') {
                      setActiveSection(item.id);
                    } else {
                      scrollToSection(item.id);
                    }
                  }}
                  className={`nav-item px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === item.id
                      ? 'text-sky-600'
                      : 'text-gray-700 hover:text-sky-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <LanguageSelector 
                currentLanguage={currentLanguage}
                onLanguageChange={changeLanguage}
              />
              
              <button
                onClick={() => setIsDemoFormOpen(true)}
                className="hidden sm:flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.requestDemo}</span>
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-4 py-2 space-y-1">
              {[
                { id: 'home', label: t.nav.home },
                { id: 'about', label: t.nav.about },
                { id: 'how-it-works', label: t.nav.howItWorks },
                { id: 'tech-specs', label: t.nav.techSpecs },
                { id: 'virtual-tour', label: 'Virtual Tour' },
                { id: 'impact', label: t.nav.impact },
                { id: 'contact', label: t.nav.contact }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    if (item.id === 'tech-specs' || item.id === 'virtual-tour') {
                      setActiveSection(item.id);
                    } else {
                      scrollToSection(item.id);
                    }
                    setIsMenuOpen(false);
                  }}
                  className={`block w-full text-left px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'text-sky-600 bg-sky-50'
                      : 'text-gray-700 hover:text-sky-600 hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  setIsDemoFormOpen(true);
                  setIsMenuOpen(false);
                }}
                className="w-full mt-4 bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{t.nav.requestDemo}</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PlastiFind</span>
            </div>
            <p className="text-gray-400 mb-4">{t.footer.tagline}</p>
            <p className="text-gray-500 text-sm">
              © 2024 PlastiFind. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>

      {/* Demo Form Modal */}
      {isDemoFormOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">{t.demo.title}</h2>
                <button
                  onClick={() => setIsDemoFormOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <p className="text-gray-600 mb-8">{t.demo.description}</p>

              <form onSubmit={handleDemoSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.demo.form.name}
                    </label>
                    <input
                      type="text"
                      required
                      value={demoForm.name}
                      onChange={(e) => setDemoForm({...demoForm, name: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={t.demo.form.namePlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.demo.form.email}
                    </label>
                    <input
                      type="email"
                      required
                      value={demoForm.email}
                      onChange={(e) => setDemoForm({...demoForm, email: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={t.demo.form.emailPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.demo.form.company}
                    </label>
                    <input
                      type="text"
                      value={demoForm.company}
                      onChange={(e) => setDemoForm({...demoForm, company: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={t.demo.form.companyPlaceholder}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t.demo.form.phone}
                    </label>
                    <input
                      type="tel"
                      value={demoForm.phone}
                      onChange={(e) => setDemoForm({...demoForm, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                      placeholder={t.demo.form.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.demo.form.location}
                  </label>
                  <input
                    type="text"
                    value={demoForm.location}
                    onChange={(e) => setDemoForm({...demoForm, location: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder={t.demo.form.locationPlaceholder}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.demo.form.message}
                  </label>
                  <textarea
                    rows={4}
                    value={demoForm.message}
                    onChange={(e) => setDemoForm({...demoForm, message: e.target.value})}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent"
                    placeholder={t.demo.form.messagePlaceholder}
                  />
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={() => setIsDemoFormOpen(false)}
                    className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {t.demo.cancel}
                  </button>
                  <button
                    type="submit"
                    disabled={demoStatus === 'sending'}
                    className="flex-1 bg-sky-500 hover:bg-sky-600 disabled:bg-gray-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2"
                  >
                    {demoStatus === 'sending' ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>{t.demo.submitting}</span>
                      </>
                    ) : (
                      <>
                        <Calendar className="w-5 h-5" />
                        <span>{t.demo.submit}</span>
                      </>
                    )}
                  </button>
                </div>

                {demoStatus === 'success' && (
                  <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5" />
                    <span>{t.demo.success}</span>
                  </div>
                )}

                {demoStatus === 'error' && (
                  <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>{t.demo.error}</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* 3D Viewer Modal */}
      <Robot3DViewer 
        isOpen={is3DViewerOpen}
        onClose={() => setIs3DViewerOpen(false)}
      />
    </div>
  );
}

export default App;