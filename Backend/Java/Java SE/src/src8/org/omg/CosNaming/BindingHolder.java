package org.omg.CosNaming;

/**
* org/omg/CosNaming/BindingHolder.java .
* Generated by the IDL-to-Java compiler (portable), version "3.2"
* from /HUDSON/workspace/8-2-build-linux-amd64/jdk8u65/4987/corba/src/share/classes/org/omg/CosNaming/nameservice.idl
* Tuesday, October 6, 2015 5:16:49 PM PDT
*/

public final class BindingHolder implements org.omg.CORBA.portable.Streamable
{
  public org.omg.CosNaming.Binding value = null;

  public BindingHolder ()
  {
  }

  public BindingHolder (org.omg.CosNaming.Binding initialValue)
  {
    value = initialValue;
  }

  public void _read (org.omg.CORBA.portable.InputStream i)
  {
    value = org.omg.CosNaming.BindingHelper.read (i);
  }

  public void _write (org.omg.CORBA.portable.OutputStream o)
  {
    org.omg.CosNaming.BindingHelper.write (o, value);
  }

  public org.omg.CORBA.TypeCode _type ()
  {
    return org.omg.CosNaming.BindingHelper.type ();
  }

}
