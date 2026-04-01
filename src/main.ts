// import './style.css'
import { createIcons, Building2, Cpu, MapPin, ArrowRight, ChevronRight, Linkedin, Github, Layers, Database, Zap, Globe, Cloud, Map, ExternalLink, GitBranch, Triangle, Terminal, Workflow, Server, Sparkles, Bot, UserCheck, ShieldCheck, Lock, Activity, Download, X } from 'lucide'
import { mountNav, mountFooter, mountCVBanner } from './layout'

mountNav()
mountFooter()
mountCVBanner()

createIcons({
  icons: { Building2, Cpu, MapPin, ArrowRight, ChevronRight, Linkedin, Github, Layers, Database, Zap, Globe, Cloud, Map, ExternalLink, GitBranch, Triangle, Terminal, Workflow, Server, Sparkles, Bot, UserCheck, ShieldCheck, Lock, Activity, Download, X }
})
