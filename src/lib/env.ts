function require(name: string): string {
  const value = process.env[name]
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }
  return value
}

function optional(name: string, fallback: string): string {
  return process.env[name] || fallback
}

export const env = {
  sanity: {
    projectId: require('NEXT_PUBLIC_SANITY_PROJECT_ID'),
    dataset: optional('NEXT_PUBLIC_SANITY_DATASET', 'production'),
    apiVersion: optional('NEXT_PUBLIC_SANITY_API_VERSION', '2024-01-01'),
    readToken: require('SANITY_API_READ_TOKEN'),
    writeToken: require('SANITY_API_WRITE_TOKEN'),
    revalidateSecret: require('SANITY_REVALIDATE_SECRET'),
  },
  resend: {
    apiKey: require('RESEND_API_KEY'),
    fromEmail: require('RESEND_FROM_EMAIL'),
    toEmail: require('RESEND_TO_EMAIL'),
  },
} as const
