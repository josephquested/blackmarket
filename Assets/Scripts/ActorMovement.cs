using UnityEngine;
using System.Collections;

public class ActorMovement : MonoBehaviour {
	public float speed;
	public int direction;

	public void ReceiveMovementInput (float horizontal, float vertical)
	{
		direction = Utils.DirectionFromVector(horizontal, vertical, direction);
		if (horizontal != 0 || vertical != 0)
		{
			Move(horizontal, vertical);
		}
	}

	void Move (float horizontal, float vertical)
	{
		transform.Translate(new Vector3(horizontal, 0, vertical) * speed, Space.World);
	}

	public void ReceiveCrouchInput (bool crouch)
	{
		float y = 1f;
		if (crouch) y /= 2;
		transform.localScale = new Vector3(transform.localScale.x, y, transform.localScale.z);
	}
}
