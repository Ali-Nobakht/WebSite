using System;
using Castle.DynamicProxy;

namespace WebSite.Web.Custom {
  public class LoggingInterceptor : IInterceptor
    {
        public void Intercept(IInvocation invocation)
        {
            try
            {
                Console.WriteLine("Logging On Start.");
                
                invocation.Proceed(); //فراخوانی متد اصلی در اینجا صورت می‌گیرد

                Console.WriteLine("Logging On Success.");
            }
            catch (Exception ex)
            {
                Console.WriteLine("Logging On Error.");
                throw;
            }
            finally
            {
                Console.WriteLine("Logging On Exit.");
            }
        }
    }
}