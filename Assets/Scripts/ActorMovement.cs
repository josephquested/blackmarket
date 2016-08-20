using UnityEngine;
using System.Collections;

public class ActorMovement : MonoBehaviour {
	Rigidbody rb;
	public float speed;
	public int direction;
	public bool moving;
	public bool directionIsLocked;

	void Start ()
	{
		rb = GetComponent<Rigidbody>();
	}

	public void ReceiveMovementInput (float horizontal, float vertical)
	{
		direction = DirectionFromVector(horizontal, vertical);
		if (horizontal != 0 || vertical != 0)
		{
			moving = true;
			Rotate(direction);
			Move(VectorFromDirection());
		}
		else
		{
			moving = false;
		}
	}

	int DirectionFromVector (float horizontal, float vertical)
	{
		if (vertical > 0) return  0;
		if (vertical < 0) return 2;
		if (horizontal > 0) return 1;
		if (horizontal < 0) return 3;
		else return direction;
	}

	Vector3 VectorFromDirection ()
	{
		if (direction == 0) return Vector3.forward;
		if (direction == 1) return Vector3.right;
		if (direction == 2) return Vector3.back;
		else return -Vector3.right;
	}

	public void ReceiveDirectionLock (bool isLocked)
	{
	  directionIsLocked = isLocked;
	}

	public void ReceiveCrouchInput (bool crouch)
	{
		float y = 1f;
		if (crouch) y /= 2;
		transform.localScale = new Vector3(transform.localScale.x, y, transform.localScale.z);
	}

	void Move (Vector3 movement)
	{
		transform.Translate(VectorFromDirection() * speed, Space.World);
	}

	void Rotate (int newDirection)
	{
		if (!directionIsLocked)
		{
			if (newDirection == 0) transform.rotation = Quaternion.Euler(new Vector3(0, 270, 0));
			if (newDirection == 1) transform.rotation = Quaternion.Euler(new Vector3(0, 0, 0));
			if (newDirection == 2) transform.rotation = Quaternion.Euler(new Vector3(0, 90, 0));
			if (newDirection == 3) transform.rotation = Quaternion.Euler(new Vector3(0, 180, 0));
		}
	}
}
