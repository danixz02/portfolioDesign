import { Brush, Layers3, MonitorPlay, Palette } from 'lucide-react';
import project01 from '../assets/projects/01.jpg';
import project02 from '../assets/projects/02.jpg';
import project03 from '../assets/projects/03.jpg';
import project04 from '../assets/projects/04.jpg';
import project05 from '../assets/projects/05.jpg';
import project06 from '../assets/projects/06.jpg';
import project07 from '../assets/projects/07.jpg';
import project08 from '../assets/projects/08.png';
import project09 from '../assets/projects/09.jpg';
import project10 from '../assets/projects/10.jpeg';

export const navItems = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Contato', href: '#contato' },
];

export const hero = {
  eyebrow: 'Design gráfico para marcas e criadores',
  title: ['Daniel', 'Friedrich'],
  description:
    'Atuo na criação de artes para mídias sociais, thumbnails, banners e identidades visuais para canais no YouTube, sempre com foco em clareza, sofisticação e resultado visual.',
  primaryCta: { label: 'Ver projetos', href: '#portfolio' },
  secondaryCta: { label: 'Conversar agora', href: '#contato' },
};

export const skills = ['Branding', 'Social media', 'YouTube', 'Photoshop', 'Illustrator', 'Direção de arte'];

export const about = {
  eyebrow: 'Sobre mim',
  title: 'Design gráfico com direção, consistência e acabamento premium.',
  description:
    'Sou designer gráfico, com experiência na criação de artes para Instagram, Facebook e outras plataformas digitais, além de thumbnails, banners e identidades visuais para canais no YouTube. Meu processo combina pesquisa, composição, narrativa visual e refinamento para transformar briefings em peças profissionais e coerentes.',
  highlights: ['80+ projetos', '12 segmentos', 'A11y e UX'],
};

export const projects = [
  {
    title: 'Canal DAN1ZZ',
    type: 'Thumbnails YouTube',
    details:
      'Projeto de thumbnail criada para destacar o vídeo, chamar a atenção do público e manter a identidade visual do canal.',
    challenge:
      'Desenvolver um visual moderno e elegante, mantendo a clareza e a adaptação para diferentes formatos e plataformas.',
    deliverables: ['Direção de arte', 'Paleta cromática', 'Aplicações digitais'],
    image: project01,
    imageAlt: 'Thumbnail visual do projeto DAN1ZZ',
  },
  {
    title: 'Canal DAN1ZZ',
    type: 'Thumbnails YouTube',
    details:
      'Projeto de thumbnail criada para destacar o vídeo, chamar a atenção do público e manter a identidade visual do canal.',
    challenge:
      'Desenvolver um visual moderno e elegante, mantendo a clareza e a adaptação para diferentes formatos e plataformas.',
    deliverables: ['Direção de arte', 'Paleta cromática'],
    image: project02,
    imageAlt: 'Thumbnail visual do projeto DAN1ZZ',
  },
  {
    title: 'Canal DAN1ZZ',
    type: 'Thumbnails YouTube',
    details:
      'Identidade de thumbnails construída para melhorar leitura em telas pequenas e reforçar reconhecimento do canal.',
    challenge:
      'Garantir impacto imediato no mobile, sem poluir a composição visual.',
    deliverables: ['Sistema de thumbnails', 'Variações por tema', 'Tipografia de impacto', 'Padrão de contraste'],
    image: project03,
    imageAlt: 'Thumbnail visual do projeto DAN1ZZ',
  },
  {
    title: 'Canal DAN1ZZ',
    type: 'Thumbnails YouTube',

    details:
      'Projeto de thumbnail desenvolvido para unir a estética de terror ao universo de Minecraft, criando uma composição marcante, envolvente e pensada para atrair a atenção do público.',
    challenge:
      'Desenvolvimento de uma thumbnail para uma transmisião ao vivo de Minecraft com estética de terror, buscando criar uma composição visual impactante que transmitisse suspense, despertasse curiosidade e incentivasse o clique, sem perder a identidade do jogo.',
    deliverables: ['Equilibrar o estilo de Minecraft com a atmosfera de terror', 'Criar impacto visual sem poluir', 'Destacar o personagem', 'Utilizar iluminação e cores para reforçar o suspense'],
    image: project04,
    imageAlt: 'Thumbnail visual do projeto DAN1ZZ',
  },
  {
    title: 'Canal DANIXZ',
    type: 'Thumbnails YouTube',
    details:
      'Projeto de thumbnail desenvolvido para unir a estética de terror ao universo de Minecraft.',
    challenge:
      'Desenvolvimento de uma thumbnail para uma transmisião ao vivo de Minecraft com estética de terror.',
    deliverables: ['Equilibrar o estilo de Minecraft com a atmosfera de terror', 'Criar impacto visual sem poluir', 'Destacar o personagem', 'Utilizar iluminação e cores para reforçar o suspense'],
    image: project05,
    imageAlt: 'Thumbnail visual do projeto DANIXZ',
  },
  {
    title: 'Canal DANIXZ',
    type: 'Thumbnails YouTube',
    details:
      'Projeto de thumbnail desenvolvido para edits do universo geek, combinando uma estética dinâmica e viral.',
    challenge:
      'Desenvolvimento de uma thumbnail para um vídeo de edit do universo geek, com foco em transmitir intensidade, movimento e impacto visual, valorizando elementos de animes.',
    deliverables: ['Equilibrar efeitos visuais sem sobrecarregar o design', 'Destacar o personagem principal', 'Criar uma composição com sensação de movimento', 'Garantir boa leitura dos elementos'],
    image: project06,
    imageAlt: 'Thumbnail visual do projeto DANIXZ',
  },
  {
     title: 'Canal DANIXZ',
    type: 'Thumbnails YouTube',
    details:
      'Projeto de thumbnail desenvolvido para tutorial de edição de vídeo do universo geek, com uma identidade visual criativa.',
    challenge:
      'Criação de uma thumbnail para um tutorial de edição de vídeo com estética geek, combinando elementos de edição e animes, cores vibrantes e uma composição dinâmica para atrair o público e destacar o conteúdo.',
    deliverables: ['Destacar o tema do tutorial de forma imediata', 'Criar uma identidade visual moderna e geek', 'Garantir boa leitura em dispositivos móveis'],
    image: project07,
    imageAlt: 'Thumbnail visual do projeto DANIXZ',
  },
  {
    title: 'Cafés Moura',
    type: 'Mockup digital',
    details:
      'Projeto de mockups desenvolvido para apresentar uma identidade visual de cafeteria inspirada na estética asiática, valorizando as embalagens de café com um design elegante, moderno e marcante.',
    challenge:
      'Criação de mockups digitais para uma linha de embalagens de café, explorando uma identidade visual inspirada na estética asiática. O projeto buscou transmitir sofisticação, autenticidade e fortalecer a percepção da marca.',
    deliverables: ['Mockups realistas das embalagens de café', 'Aplicação da identidade visual em diferentes formatos', 'Key visual', 'Composição final com foco em branding e impacto visual'],
    image: project08,
    imageAlt: 'Mockup visual do projeto Cafés Moura com embalagens de Café sofisticadas.',
  },
  {
    title: 'Canal DAN1ZZ',
    type: 'Banner digital',
    details:
      'Projeto de banner desenvolvido para criar uma recepção visual atrativa e fortalecer a identidade de uma lojinha digital de afiliados.',
    challenge:
      'Criação de um banner de boas-vindas para uma mini loja de links de afiliados, com foco em transmitir confiança, organização e uma identidade visual moderna para causar uma boa primeira impressão.',
    deliverables: ['Criar uma recepção visual agradável', 'Transmitir credibilidade em poucos elementos', 'Adaptar o design para diferentes plataformas'],
    image: project09,
    imageAlt: 'Banner visual do projeto DAN1ZZ',
  },
  {
    title: 'Lanches.com',
    type: 'Identidade visual',
    details:
      'Projeto de logo e cardápio digital desenvolvido para transmitir a essência das clássicas hamburguerias americanas, com um visual descontraído, marcante e cheio de personalidade.',
    challenge:
      'Criação da identidade visual e do cardápio digital de uma hamburgueria inspirada no estilo dos tradicionais diners americanos, combinando um visual descontraído, moderno e cheio de personalidade para fortalecer a marca e melhorar a experiência dos clientes.',
    deliverables: ['Logo principal', 'Variações da identidade visual', 'Paleta de cores', 'Tipografia da marca', 'Cardápio digital', 'Ícones e elementos gráficos de apoio'],
    image: project10,
    imageAlt: 'Identidade visual do projeto Lanches.com com logo e cardápio digital.',
  },
];

export const services = [
  {
    title: 'Identidade visual',
    description: 'Criação de logos, paleta de cores, tipografia e sistema visual para marcas e canais.',
    icon: Palette,
  },
  {
    title: 'Social media',
    description: 'Artes para Instagram, Facebook e outras plataformas digitais, com consistência estética.',
    icon: Layers3,
  },
  {
    title: 'Thumbnails para YouTube',
    description: 'Capas com estratégia visual, hierarquia clara e acabamento profissional.',
    icon: MonitorPlay,
  },
  {
    title: 'Banners e ads',
    description: 'Peças digitais para campanhas, lançamentos, tráfego pago e comunicação institucional.',
    icon: Brush,
  },
];

export const testimonials = [
  {
    quote: 'A entrega trouxe mais consistência para a marca e elevou a percepção visual do nosso produto.',
    name: 'Clara',
    role: 'Founder, Aurora Studio',
  },
  {
    quote: 'Processo organizado, olhar estratégico e peças com acabamento impecável.',
    name: 'Rafael',
    role: 'Head de Conteúdo',
  },
  {
  quote: 'As thumbnails ficaram muito mais atrativas e aumentaram a qualidade visual do canal desde o primeiro vídeo.',
  name: 'Daniel',
  role: 'Criador de Conteúdo',
},
{
  quote: 'O resultado superou as expectativas. A identidade ficou marcante e transmitiu exatamente a personalidade da nossa marca.',
  name: 'Angela',
  role: 'Proprietária, Lanches.com',
},
  
];

export const socials = [
  { label: 'WhatsApp', href: 'https://api.whatsapp.com/send?phone=5527995892136&text=Oi!%20%F0%9F%91%8B%20Encontrei%20seu%20portf%C3%B3lio%20e%20gostei%20muito%20do%20seu%20trabalho.%20Podemos%20conversar%20sobre%20um%20projeto%20que%20tenho%20em%20mente%3F', icon: 'message' },
];
