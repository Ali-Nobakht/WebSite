using System;
using Castle.DynamicProxy;

namespace WebSite.Web.Custom {
  public class LoggingInterceptor : IInterceptor
    {
        public void Intercept(IInvocation invocation)
        {
            try
            {
                Console.WriteLine("Logging On Start :"+invocation.Method.Name);
                
                invocation.Proceed(); //فراخوانی متد اصلی در اینجا صورت می‌گیرد

                Console.WriteLine("Logging On Success :"+invocation.Method.Name);
            }
            catch (Exception ex)
            {
                Console.WriteLine("Logging On Error :"+invocation.Method.Name);
                Console.WriteLine("Message :"+ex.Message);
                throw;
            }
            finally
            {
                Console.WriteLine("Logging On Exit :"+invocation.Method.Name);
            }
        }
    }
}