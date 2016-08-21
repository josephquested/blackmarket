﻿using UnityEngine;
using System.Collections;

public class Inputs : MonoBehaviour {
	ActorMovement actorMovement;
	ActorAttack actorAttack;

	void Start ()
	{
		actorMovement = GetComponent<ActorMovement>();
		actorAttack = GetComponent<ActorAttack>();
	}

	void FixedUpdate ()
	{
		MovementInput();
		CrouchInput();
		FireInput();
	}

	void MovementInput ()
	{
		actorMovement.ReceiveMovementInput(Input.GetAxisRaw("Horizontal"), Input.GetAxisRaw("Vertical"));
	}

	void FireInput ()
	{
		actorAttack.ReceiveFireInput(Input.GetAxisRaw("FireHorizontal"), Input.GetAxisRaw("FireVertical"));
	}

	void CrouchInput ()
	{
		actorMovement.ReceiveCrouchInput(Input.GetButton("Crouch"));
	}
}
