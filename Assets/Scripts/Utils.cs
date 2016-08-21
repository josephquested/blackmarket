using UnityEngine;
using System.Collections;

public class Utils
{
	public static int DirectionFromVector (float horizontal, float vertical, int direction)
	{
		if (vertical > 0) return  0;
		if (vertical < 0) return 2;
		if (horizontal > 0) return 1;
		if (horizontal < 0) return 3;
		else return direction;
	}

	public static Vector3 VectorFromDirection (int direction)
	{
		if (direction == 0) return Vector3.forward;
		if (direction == 1) return Vector3.right;
		if (direction == 2) return Vector3.back;
		else return -Vector3.right;
	}
}
