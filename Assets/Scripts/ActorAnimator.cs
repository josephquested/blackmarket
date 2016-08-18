using UnityEngine;
using System.Collections;

public class ActorAnimator : MonoBehaviour {
	Animator animator;
	ActorMovement actorMovement;

	void Start ()
	{
		animator = GetComponent<Animator>();
		actorMovement = GetComponent<ActorMovement>();
	}

	void FixedUpdate ()
	{
		UpdateDirection();
		UpdateSpeed();
	}

	void UpdateDirection ()
	{
		animator.SetInteger("direction", actorMovement.direction);
	}

	void UpdateSpeed ()
	{
		if (actorMovement.moving) animator.speed = 1;
		else animator.speed = 0;
	}
}
