import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Maximize2, 
  Volume2, 
  VolumeX,
  MapPin,
  Eye,
  Trash2,
  CheckCircle,
  ArrowRight,
  Camera,
  Waves,
  Sun,
  Wind,
  Thermometer,
  Clock,
  Users,
  Award,
  TrendingUp,
  X,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';

interface BeachLocation {
  id: string;
  name: string;
  country: string;
  coordinates: { lat: number; lng: number };
  beforeImage: string;
  afterImage: string;
  stats: {
    plasticRemoved: number;
    areaCleared: number;
    timeframe: string;
    accuracy: number;
  };
  weather: {
    temperature: number;
    windSpeed: number;
    conditions: string;
  };
  hotspots: Array<{
    x: number;
    y: number;
    type: 'detection' | 'collection' | 'monitoring';
    title: string;
    description: string;
  }>;
}

const VirtualBeachTour = () => {
  const [currentLocation, setCurrentLocation] = useState(0);
  const [viewMode, setViewMode] = useState<'before' | 'after'>('before');
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);
  const tourRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const beachLocations: BeachLocation[] = [
    {
      id: 'tunisia-beach',
      name: 'Sidi Bou Said Beach',
      country: 'Tunisia',
      coordinates: { lat: 36.8675, lng: 10.3467 },
      beforeImage: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      afterImage: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      stats: {
        plasticRemoved: 847,
        areaCleared: 2.3,
        timeframe: '3 months',
        accuracy: 89
      },
      weather: {
        temperature: 24,
        windSpeed: 12,
        conditions: 'Sunny'
      },
      hotspots: [
        {
          x: 25,
          y: 60,
          type: 'detection',
          title: 'Plastic Bottle Detection',
          description: 'YOLOv11 AI detected and flagged plastic bottle for collection'
        },
        {
          x: 70,
          y: 45,
          type: 'collection',
          title: 'Successful Collection',
          description: 'Labib-Bot successfully collected and stored plastic waste'
        },
        {
          x: 45,
          y: 30,
          type: 'monitoring',
          title: 'Behavior Monitoring',
          description: 'Real-time monitoring detected littering behavior and issued alert'
        }
      ]
    },
    {
      id: 'mediterranean-coast',
      name: 'Costa Brava',
      country: 'Spain',
      coordinates: { lat: 41.9794, lng: 3.0951 },
      beforeImage: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      afterImage: 'https://images.pexels.com/photos/1032650/pexels-photo-1032650.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      stats: {
        plasticRemoved: 1243,
        areaCleared: 4.1,
        timeframe: '6 months',
        accuracy: 92
      },
      weather: {
        temperature: 22,
        windSpeed: 8,
        conditions: 'Partly Cloudy'
      },
      hotspots: [
        {
          x: 35,
          y: 55,
          type: 'detection',
          title: 'Food Wrapper Detection',
          description: 'Advanced AI identified food packaging waste near shoreline'
        },
        {
          x: 60,
          y: 70,
          type: 'collection',
          title: 'Debris Collection',
          description: 'Multiple plastic items collected in single operation'
        },
        {
          x: 80,
          y: 25,
          type: 'monitoring',
          title: 'Tourist Education',
          description: 'Automated alert system educated visitors about proper waste disposal'
        }
      ]
    },
    {
      id: 'atlantic-beach',
      name: 'Essaouira Beach',
      country: 'Morocco',
      coordinates: { lat: 31.5084, lng: -9.7595 },
      beforeImage: 'https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      afterImage: 'https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
      stats: {
        plasticRemoved: 692,
        areaCleared: 1.8,
        timeframe: '4 months',
        accuracy: 87
      },
      weather: {
        temperature: 26,
        windSpeed: 15,
        conditions: 'Windy'
      },
      hotspots: [
        {
          x: 20,
          y: 40,
          type: 'detection',
          title: 'Fishing Net Fragment',
          description: 'Specialized detection of marine debris and fishing equipment'
        },
        {
          x: 55,
          y: 65,
          type: 'collection',
          title: 'Microplastic Collection',
          description: 'Advanced sensors detected and collected small plastic particles'
        },
        {
          x: 75,
          y: 35,
          type: 'monitoring',
          title: 'Fishing Activity Monitor',
          description: 'Monitoring fishing activities to prevent gear abandonment'
        }
      ]
    }
  ];

  const currentBeach = beachLocations[currentLocation];

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setViewMode(prev => prev === 'before' ? 'after' : 'before');
      }, 3000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetTour = () => {
    setIsPlaying(false);
    setViewMode('before');
    setCurrentLocation(0);
    setSelectedHotspot(null);
  };

  const nextLocation = () => {
    setCurrentLocation((prev) => (prev + 1) % beachLocations.length);
    setSelectedHotspot(null);
  };

  const prevLocation = () => {
    setCurrentLocation((prev) => (prev - 1 + beachLocations.length) % beachLocations.length);
    setSelectedHotspot(null);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      tourRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const getHotspotIcon = (type: string) => {
    switch (type) {
      case 'detection':
        return <Eye className="w-4 h-4" />;
      case 'collection':
        return <Trash2 className="w-4 h-4" />;
      case 'monitoring':
        return <Users className="w-4 h-4" />;
      default:
        return <MapPin className="w-4 h-4" />;
    }
  };

  const getHotspotColor = (type: string) => {
    switch (type) {
      case 'detection':
        return 'bg-orange-500 border-orange-300';
      case 'collection':
        return 'bg-green-500 border-green-300';
      case 'monitoring':
        return 'bg-blue-500 border-blue-300';
      default:
        return 'bg-gray-500 border-gray-300';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Virtual Beach Tour</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the transformative impact of Labib-Bot through immersive before and after beach environments
          </p>
        </div>

        {/* Main Tour Interface */}
        <div 
          ref={tourRef}
          className={`relative bg-white rounded-2xl shadow-2xl overflow-hidden ${
            isFullscreen ? 'fixed inset-0 z-50 rounded-none' : 'h-[600px]'
          }`}
        >
          {/* Beach Image Container */}
          <div className="relative h-full">
            <img
              src={viewMode === 'before' ? currentBeach.beforeImage : currentBeach.afterImage}
              alt={`${currentBeach.name} - ${viewMode}`}
              className="w-full h-full object-cover transition-all duration-1000"
            />
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
            
            {/* Interactive Hotspots */}
            {viewMode === 'after' && currentBeach.hotspots.map((hotspot, index) => (
              <button
                key={index}
                onClick={() => setSelectedHotspot(selectedHotspot === index ? null : index)}
                className={`absolute w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-300 hover:scale-110 ${
                  getHotspotColor(hotspot.type)
                } ${selectedHotspot === index ? 'scale-125 ring-4 ring-white/50' : ''}`}
                style={{
                  left: `${hotspot.x}%`,
                  top: `${hotspot.y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <div className="w-full h-full flex items-center justify-center text-white">
                  {getHotspotIcon(hotspot.type)}
                </div>
                <div className="absolute inset-0 rounded-full animate-ping opacity-75 bg-current" />
              </button>
            ))}

            {/* Hotspot Info Panel */}
            {selectedHotspot !== null && (
              <div className="absolute bottom-20 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-fade-in">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {currentBeach.hotspots[selectedHotspot].title}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {currentBeach.hotspots[selectedHotspot].description}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X className="w-4 h-4 text-gray-500" />
                  </button>
                </div>
              </div>
            )}

            {/* Location Info */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-lg">
              <div className="flex items-center space-x-3 mb-2">
                <MapPin className="w-5 h-5 text-blue-500" />
                <div>
                  <h3 className="font-semibold text-gray-900">{currentBeach.name}</h3>
                  <p className="text-sm text-gray-600">{currentBeach.country}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Thermometer className="w-4 h-4" />
                  <span>{currentBeach.weather.temperature}°C</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Wind className="w-4 h-4" />
                  <span>{currentBeach.weather.windSpeed} km/h</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Sun className="w-4 h-4" />
                  <span>{currentBeach.weather.conditions}</span>
                </div>
              </div>
            </div>

            {/* View Mode Indicator */}
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-3 shadow-lg">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${viewMode === 'before' ? 'bg-red-500' : 'bg-green-500'}`} />
                <span className="font-medium text-gray-900 capitalize">{viewMode}</span>
                {viewMode === 'after' && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevLocation}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            
            <button
              onClick={nextLocation}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white backdrop-blur-sm rounded-full p-3 shadow-lg transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* Control Panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <div className="flex items-center justify-between">
              {/* Left Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={togglePlayPause}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                
                <button
                  onClick={resetTour}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
                
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
                </button>
              </div>

              {/* Center Info */}
              <div className="text-center text-white">
                <div className="text-sm opacity-80 mb-1">
                  Location {currentLocation + 1} of {beachLocations.length}
                </div>
                <div className="flex items-center space-x-2">
                  {beachLocations.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentLocation(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentLocation ? 'bg-white' : 'bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setShowInfo(!showInfo)}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  <Info className="w-6 h-6" />
                </button>
                
                <button
                  onClick={toggleFullscreen}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 text-white transition-all duration-200 hover:scale-110"
                >
                  <Maximize2 className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Panel */}
        {showInfo && (
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                <Trash2 className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {currentBeach.stats.plasticRemoved}
                </div>
                <div className="text-sm text-gray-600">Plastic Items Removed</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                <Waves className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {currentBeach.stats.areaCleared} km²
                </div>
                <div className="text-sm text-gray-600">Area Cleared</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-sky-50 rounded-xl">
                <Clock className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {currentBeach.stats.timeframe}
                </div>
                <div className="text-sm text-gray-600">Deployment Period</div>
              </div>
              
              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl">
                <Award className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {currentBeach.stats.accuracy}%
                </div>
                <div className="text-sm text-gray-600">Detection Accuracy</div>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Impact Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Marine Life Protection</h4>
                    <p className="text-sm text-gray-600">Reduced plastic ingestion risk for sea turtles and marine animals</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Tourism Enhancement</h4>
                    <p className="text-sm text-gray-600">Improved beach aesthetics attracting more eco-conscious visitors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Behavioral Change</h4>
                    <p className="text-sm text-gray-600">Increased environmental awareness among beachgoers</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tour Instructions */}
        <div className="mt-8 bg-gradient-to-r from-blue-500 to-sky-600 text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">How to Use the Virtual Tour</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Play className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Auto-Play Mode</h4>
                <p className="text-sm text-blue-100">Click play to automatically cycle between before and after views</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Interactive Hotspots</h4>
                <p className="text-sm text-blue-100">Click on colored dots in 'after' view to see detailed information</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Navigate Locations</h4>
                <p className="text-sm text-blue-100">Use arrows or dots to explore different beach locations</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <Maximize2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Fullscreen View</h4>
                <p className="text-sm text-blue-100">Enter fullscreen mode for an immersive experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VirtualBeachTour;