using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using InfoTrack.SearchEngine.PageRanker.Services.Domain;

namespace InfoTrack.SearchEngine.PageRanker.Services
{
    public sealed class SearchEngineRanker : ISearchEngineRanker
    {
        private readonly IEnumerable<IPageRanker> _pageRankers;

        public SearchEngineRanker(IEnumerable<IPageRanker> pageRankers)
        {
            _pageRankers = pageRankers ?? throw new ArgumentNullException(nameof(pageRankers));
        }

        public async Task<SearchEnginePageRank[]> GetPageRanks(string searchTerm, string siteUri)
        {
            var pageRanks = new List<SearchEnginePageRank>();

            foreach (var pageRanker in _pageRankers)
            {
                pageRanks.Add(new SearchEnginePageRank
                {
                    PageRank = await pageRanker.GetPageRank(searchTerm, siteUri),
                    SearchEngine = pageRanker.Name
                });
            }

            return pageRanks.ToArray();
        }
    }
}