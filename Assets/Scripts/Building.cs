using UnityEngine;
using System.Collections;

public class Building : MonoBehaviour
{
	void OnMouseOver () {
		if (Input.GetMouseButtonDown(0))
		{
			print("clicked!");
		}
	}
}
