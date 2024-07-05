/*
 * Regex to match any base64 string
 */
export const CashuRegex = /(cashuA[A-Za-z0-9_-]{0,10000}={0,3})/i;

/**
 * Extract file extensions regex
 */
// eslint-disable-next-line no-useless-escape
export const FileExtensionRegex = /\.([\w]{1,7})$/i;

/**
 * Hashtag regex
 */
// eslint-disable-next-line no-useless-escape
export const HashtagRegex = /(#[^\s!@#$%^&*()=+.\/,\[{\]};:'"?><]+)/g;

export const InvoiceRegex = /(lnbc\w+)/i;

export const MarkdownCodeRegex = /(```.+?```)/gms;

export const MentionNostrEntityRegex = /@n(pub|profile|event|ote|addr|)1[acdefghjklmnpqrstuvwxyz023456789]+/g;

/**
 * Legacy tag reference regex
 */
export const TagRefRegex = /(#\[\d+\])/gm;
