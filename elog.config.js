module.exports = {
  write: {
    platform: 'flowus',
    flowus: {
      tablePageId: process.env.FLOWUS_TABLE_PAGE_ID,
      filter: {property: 'status',value: '已发布'},
    }
  },
  deploy: {
    platform: 'halo',
    halo: {
      endpoint: process.env.HALO_ENDPOINT,
      token: process.env.HALO_TOKEN,
      policyName: process.env.HALO_POLICY_NAME,
      rowType: 'html',
      needUploadImage: false,
    }
  },
  image: {
    enable: true,
    platform: 'github',
    github: {
      token: process.env.GITHUB_TOKEN,
      user: process.env.ELOG_GITHUB_USER,
      repo: process.env.ELOG_GITHUB_REPO,
      branch: 'main',
      prefixKey: 'pics/',
      host: 'https://cdn.jsdelivr.net'
    }
  }
}
