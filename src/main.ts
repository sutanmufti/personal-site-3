// import './style.css'
import { createIcons, Building2, Cpu, MapPin, ArrowRight, ChevronRight, Linkedin, Github } from 'lucide'
import { mountNav, mountFooter } from './layout'

mountNav()
mountFooter()

createIcons({
  icons: { Building2, Cpu, MapPin, ArrowRight, ChevronRight, Linkedin, Github }
})
