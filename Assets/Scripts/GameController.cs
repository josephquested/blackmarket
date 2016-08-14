using UnityEngine;
using System.Collections;

public class GameController : MonoBehaviour {

	ResourceController resources;
	Building selectedBuilding;

	void Start ()
	{
		resources = GetComponent<ResourceController>();
	}
}
