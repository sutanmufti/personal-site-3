// import './style.css'
import { createIcons, Building2, Cpu, MapPin, ArrowRight, ChevronRight, Linkedin, Github, Layers, Database, Zap, Globe, Cloud, Map, ExternalLink } from 'lucide'
import { mountNav, mountFooter } from './layout'

mountNav()
mountFooter()

createIcons({
  icons: { Building2, Cpu, MapPin, ArrowRight, ChevronRight, Linkedin, Github, Layers, Database, Zap, Globe, Cloud, Map, ExternalLink }
})
