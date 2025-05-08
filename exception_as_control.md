```pseudo
validate()
{
  if(!ok)
  {
    throw new Exception();
  }
}

payment()
{
  try
  {
    validate();
    transfer();
  }
  catch(e)
  {

  }
}

```
