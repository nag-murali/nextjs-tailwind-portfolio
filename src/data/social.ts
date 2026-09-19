export type SocialLink = {
  name: string;
  href: string;
  /** Short display value, e.g. for the contact cards. */
  label: string;
};

export const contact = {
  email: 'nagmurali96@gmail.com',
  phone: '+91 9666756386',
  github: 'https://github.com/nag-murali',
  linkedin: 'https://www.linkedin.com/in/nagendra-muralidhar-pulla-0a836a21b',
} as const;

export const socialLinks: SocialLink[] = [
  { name: 'GitHub', href: contact.github, label: 'nag-murali' },
  { name: 'LinkedIn', href: contact.linkedin, label: 'Nagendra Pulla' },
  {
    name: 'Call',
    href: `tel:${contact.phone.replace(/\s/g, '')}`,
    label: contact.phone,
  },
  { name: 'Email', href: `mailto:${contact.email}`, label: contact.email },
];
