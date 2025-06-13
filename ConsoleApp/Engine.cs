using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp
{
    public class Engine
    {

    }

    public class DiesalEngine : Engine
    {
        public void start()
        {
            Console.WriteLine("Diesel engine started");
        }   
    }

    public class SolarEngine : Engine
    { 
        public void start()
        {
            throw new NotImplementedException("Solar engine cannot start");
        }
    }
}
