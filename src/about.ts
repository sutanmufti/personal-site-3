import { createIcons, GraduationCap, MapPin, ExternalLink, Download, Building2, Briefcase, Linkedin, Github, X } from 'lucide'
import { mountNav, mountFooter, mountCVBanner } from './layout'

mountNav()
mountFooter()
mountCVBanner()

createIcons({
  icons: { GraduationCap, MapPin, ExternalLink, Download, Building2, Briefcase, Linkedin, Github, X }
})
