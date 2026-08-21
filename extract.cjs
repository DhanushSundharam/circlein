const fs = require('fs');

const content = fs.readFileSync('src/pages/Landing.jsx', 'utf-8');
const tStart = content.indexOf('const T = {');
const tEnd = content.indexOf('const PILL_COLORS');
const tBlock = content.substring(tStart, tEnd).trim();

const imports = `import React from 'react';
import {
  Car, MapPin, Clock, ArrowRight, ChevronDown,
  Shield, Star, Phone, CheckCircle, Smile, Navigation, MessageCircle,
  PartyPopper, Briefcase, Users, HeartPulse,
  Droplets, Wrench, Sparkles, Truck, User, Zap, Wind, Brush, Globe, Bike, Van, Bus,
  ShieldCheck, BadgeCheck, IndianRupee, Gift
} from 'lucide-react';
`;

fs.writeFileSync('src/utils/content.jsx', imports + '\nexport ' + tBlock + '\n');
console.log('T extracted');
