using System.Threading;
using System.Threading.Tasks;
using Api.SignalR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    public class TestController: ControllerBase
    {
        private readonly IHubContext<NotificationHub> _notificationHub;

        public TestController(IHubContext<NotificationHub> notificationHub)
        {
            _notificationHub = notificationHub;
        }

        [HttpPost]
        public async Task<IActionResult> NewLog([FromBody]string logMessage, CancellationToken token)
        {
            if(string.IsNullOrEmpty(logMessage))
            {
                return BadRequest();
            }

            await _notificationHub.Clients.All.SendAsync("logMessage", logMessage);

            return Ok();
        }
    }
}