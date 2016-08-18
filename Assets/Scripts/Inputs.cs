using UnityEngine;
using System.Collections;

public class Inputs : MonoBehaviour {
	ActorMovement actorMovement;

	void Start ()
	{
		actorMovement = GetComponent<ActorMovement>();
	}

	void FixedUpdate ()
	{
		MovementInput();
	}

	void MovementInput ()
	{
		actorMovement.ReceiveMovementInput(Input.GetAxis("Horizontal"), Input.GetAxis("Vertical"));
	}
}
