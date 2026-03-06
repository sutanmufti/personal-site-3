import { createIcons, GraduationCap, MapPin, ExternalLink, Download, Building2, Briefcase, Linkedin, Github } from 'lucide'
import { mountNav, mountFooter } from './layout'

mountNav()
mountFooter()

createIcons({
  icons: { GraduationCap, MapPin, ExternalLink, Download, Building2, Briefcase, Linkedin, Github }
})
