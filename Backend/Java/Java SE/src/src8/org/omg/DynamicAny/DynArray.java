package org.omg.DynamicAny;


/**
* org/omg/DynamicAny/DynArray.java .
* Generated by the IDL-to-Java compiler (portable), version "3.2"
* from /HUDSON/workspace/8-2-build-linux-amd64/jdk8u65/4987/corba/src/share/classes/org/omg/DynamicAny/DynamicAny.idl
* Tuesday, October 6, 2015 5:16:49 PM PDT
*/


/**
    * DynArray objects support the manipulation of IDL arrays.
    * Note that the dimension of the array is contained in the TypeCode which is accessible
    * through the type attribute. It can also be obtained by calling the component_count operation.
    */
public interface DynArray extends DynArrayOperations, org.omg.DynamicAny.DynAny, org.omg.CORBA.portable.IDLEntity 
{
} // interface DynArray
