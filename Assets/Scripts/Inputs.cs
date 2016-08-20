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
		DirectionLockInput();
		CrouchInput();
	}

	void MovementInput ()
	{
		actorMovement.ReceiveMovementInput(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
	}

	void DirectionLockInput ()
	{
		actorMovement.ReceiveDirectionLock(Input.GetButton("DirectionLock"));
	}

	void CrouchInput ()
	{
		actorMovement.ReceiveCrouchInput(Input.GetButton("Crouch"));
	}
}
