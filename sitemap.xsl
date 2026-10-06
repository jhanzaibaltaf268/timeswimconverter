<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" 
                xmlns:html="http://www.w3.org/TR/REC-html40"
                xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9"
                xmlns:xhtml="http://www.w3.org/1999/xhtml"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <title>XML Sitemap | Time Swim Converter</title>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&amp;display=swap" rel="stylesheet" />
        <style type="text/css">
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #030712;
            color: #f3f4f6;
            margin: 0;
            padding: 40px 20px;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          .container {
            max-width: 1200px;
            margin: 0 auto;
          }
          header {
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          h1 {
            font-size: 28px;
            font-weight: 700;
            margin: 0 0 8px 0;
            background: linear-gradient(135deg, #38bdf8 0%, #0ea5e9 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          p.subtitle {
            color: rgba(255, 255, 255, 0.6);
            margin: 0;
            font-size: 14px;
            line-height: 1.5;
          }
          .stats {
            display: flex;
            gap: 20px;
            margin-bottom: 30px;
          }
          .stat-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 12px;
            padding: 20px 30px;
            min-width: 150px;
            text-align: center;
          }
          .stat-val {
            font-size: 32px;
            font-weight: 700;
            color: #38bdf8;
            margin-bottom: 4px;
          }
          .stat-lbl {
            font-size: 12px;
            color: rgba(255, 255, 255, 0.4);
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .table-container {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          }
          table {
            width: 100%;
            border-collapse: collapse;
            text-align: left;
          }
          th {
            background: rgba(255, 255, 255, 0.04);
            padding: 16px 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: uppercase;
            color: rgba(255, 255, 255, 0.6);
            letter-spacing: 0.05em;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          }
          td {
            padding: 18px 20px;
            font-size: 14px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.04);
            vertical-align: middle;
          }
          tr:hover td {
            background: rgba(56, 189, 248, 0.02);
          }
          a.loc-link {
            color: #38bdf8;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
            word-break: break-all;
          }
          a.loc-link:hover {
            color: #7dd3fc;
            text-decoration: underline;
          }
          .alternates-list {
            display: flex;
            flex-wrap: wrap;
            gap: 6px;
            margin: 0;
            padding: 0;
            list-style: none;
          }
          .alternate-pill {
            background: rgba(255, 255, 255, 0.04);
            border: 1px solid rgba(255, 255, 255, 0.06);
            border-radius: 6px;
            padding: 4px 8px;
            font-size: 11px;
            font-weight: 500;
            color: rgba(255, 255, 255, 0.7);
            display: flex;
            align-items: center;
            gap: 4px;
          }
          .alternate-pill a {
            color: #38bdf8;
            text-decoration: none;
            transition: color 0.15s;
          }
          .alternate-pill a:hover {
            color: #7dd3fc;
            text-decoration: underline;
          }
          .lang-code {
            background: rgba(56, 189, 248, 0.12);
            color: #38bdf8;
            padding: 2px 5px;
            border-radius: 4px;
            font-weight: 600;
            font-size: 10px;
            text-transform: uppercase;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <h1>XML Sitemap</h1>
            <xsl:if test="sitemap:sitemapindex">
              <p class="subtitle">This is an XML Sitemap Index pointing to the individual sitemaps of the website. Optimized for search engines and fully readable across all modern browsers.</p>
            </xsl:if>
            <xsl:if test="sitemap:urlset">
              <p class="subtitle">Generated dynamically for Time Swim Converter. Contains all static paths, tool pages, and dynamic blog routes with complete bidirectional multi-language alternates. Optimized for search engines and fully readable across all modern browsers.</p>
            </xsl:if>
          </header>

          <div class="stats">
            <xsl:if test="sitemap:sitemapindex">
              <div class="stat-card">
                <div class="stat-val"><xsl:value-of select="count(sitemap:sitemapindex/sitemap:sitemap)"/></div>
                <div class="stat-lbl">Total Sitemaps</div>
              </div>
            </xsl:if>
            <xsl:if test="sitemap:urlset">
              <div class="stat-card">
                <div class="stat-val"><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/></div>
                <div class="stat-lbl">Total URLs</div>
              </div>
              <div class="stat-card">
                <div class="stat-val">18</div>
                <div class="stat-lbl">Supported Languages</div>
              </div>
            </xsl:if>
          </div>

          <div class="table-container">
            <xsl:if test="sitemap:sitemapindex">
              <table>
                <thead>
                  <tr>
                    <th style="width: 70%;">Sitemap URL</th>
                    <th style="width: 30%;">Last Modified</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:sitemapindex/sitemap:sitemap">
                    <tr>
                      <td>
                        <a class="loc-link" href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td style="color: rgba(255,255,255,0.4); font-family: monospace;">
                        <xsl:value-of select="sitemap:lastmod"/>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>

            <xsl:if test="sitemap:urlset">
              <table>
                <thead>
                  <tr>
                    <th style="width: 40%;">Canonical URL</th>
                    <th style="width: 60%;">Multilingual Alternates</th>
                  </tr>
                </thead>
                <tbody>
                  <xsl:for-each select="sitemap:urlset/sitemap:url">
                    <tr>
                      <td>
                        <a class="loc-link" href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a>
                      </td>
                      <td>
                        <ul class="alternates-list">
                          <xsl:for-each select="xhtml:link[@rel='alternate']">
                            <li class="alternate-pill">
                              <span class="lang-code"><xsl:value-of select="@hreflang"/></span>
                              <a href="{@href}"><xsl:value-of select="@href"/></a>
                            </li>
                          </xsl:for-each>
                        </ul>
                      </td>
                    </tr>
                  </xsl:for-each>
                </tbody>
              </table>
            </xsl:if>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
