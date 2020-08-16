using System;
using System.Linq;
using System.Threading.Tasks;

using InfoTrack.SearchEngine.PageRanker.Services;
using InfoTrack.SearchEngine.PageRanker.Web.Models;

using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.SearchEngine.PageRanker.Web.Controllers
{
    [ApiController, Route("page-rank")]
    public class PageRankSearchApiController : ControllerBase
    {
        private readonly ISearchEngineRanker _searchEngineRanker;

        public PageRankSearchApiController(ISearchEngineRanker searchEngineRanker)
        {
            _searchEngineRanker = searchEngineRanker ?? throw new ArgumentNullException(nameof(searchEngineRanker));
        }

        [Route("search"), HttpPost]
        public async Task<ActionResult> FindUrlPageRank([FromBody] PageRankRequest pageRankRequest)
        {
            var pageRanks = await _searchEngineRanker.GetPageRanks(pageRankRequest.SearchTerm, pageRankRequest.Url);

            return new ObjectResult(new PageRankResponse(pageRankRequest.SearchTerm,
                                                         pageRankRequest.Url,
                                                         pageRanks.Select(x => new SearchEnginePageRank(x.SearchEngine, x.PageRank))
                                                                  .ToArray()));
        }
    }
}