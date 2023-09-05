using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace API.Extensions
{
    public static class ClaimPrincipalExtensions
    {
        public static string GetUsername(this ClaimsPrincipal user)
        {
           return user.FindFirst(ClaimTypes.Name)?.Value;
        }


        public static string GetUserId(this ClaimsPrincipal user)
        {
           return user.FindFirst(ClaimTypes.NameIdentifier)?.Value;
        }
    }
}