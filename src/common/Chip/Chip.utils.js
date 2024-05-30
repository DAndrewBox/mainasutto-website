import LoaderImage from '@assets/images/loader.webp';

export const chipTypes = {
  TIG: {
    text: 'TIGSource Archive',
    color: '#4c98cc',
    textColor: '#fff',
    icon: 'https://upload.wikimedia.org/wikipedia/en/a/a1/TIGSource_logo.png',
  },
  ANNOUNCEMENT: {
    text: 'Announcement',
    color: '#45C3B8',
    textColor: '#fff',
    icon: LoaderImage,
  },
  RELEASE: {
    text: 'Release',
    color: '#F8A555',
    textColor: '#05051e',
    icon: '📥️',
  },
  VIDEO: {
    text: 'Video',
    color: '#800050',
    textColor: '#fff',
    icon: '🎬️',
  },
  LIFE: {
    text: 'Life Update',
    color: '#FFB6C1',
    textColor: '#05051e',
    icon: '🌱',
  },
  NEWSLETTER: {
    text: 'Newsletter',
    color: '#FFD700',
    textColor: '#05051e',
    icon: '📰',
  },
};
