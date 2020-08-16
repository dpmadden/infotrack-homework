using System;
using System.Threading.Tasks;

using InfoTrack.SearchEngine.PageRanker.Web.Models;

using Microsoft.AspNetCore.Mvc;

namespace InfoTrack.SearchEngine.PageRanker.Web.Controllers
{
    [ApiController, Route("page-rank")]
    public class PageRankSearchApiController : ControllerBase
    {
        [Route("search"), HttpPost]
        public Task<ActionResult> FindUrlPageRank([FromBody] PageRankRequest pageRankRequest)
        {
            if (!Uri.TryCreate(pageRankRequest.Url, UriKind.Absolute, out var searchUri))
            {
                return Task.FromResult<ActionResult>(BadRequest(ModelState));
            }

            return Task.FromResult<ActionResult>(new ObjectResult(new PageRankResponse(pageRankRequest.Keywords,
                                                                                       searchUri,
                                                                                       new SearchEnginePageRank[0])));
        }
    }
}