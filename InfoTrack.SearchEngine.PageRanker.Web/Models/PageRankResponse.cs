using System;

namespace InfoTrack.SearchEngine.PageRanker.Web.Models
{
    public class PageRankResponse
    {
        public PageRankResponse(string[] keywords, Uri url, SearchEnginePageRank[] results)
        {
            Keywords = keywords;
            Uri = url;
            Results = results;
        }

        public string[] Keywords { get; }
        public Uri Uri { get; }

        public SearchEnginePageRank[] Results { get; }
    }
}