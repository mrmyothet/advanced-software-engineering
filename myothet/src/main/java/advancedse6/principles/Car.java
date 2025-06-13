package advancedse6.principles;

class Car {
	
	Engine engine;
	public Car (Engine engine)
	{
		this.engine = engine;
	}
	public void start()
	{
		this.engine.start();
	}
}

class Engine
{
	public void start()
	{
		
	}
}
