using UnityEngine;
using System.Collections;

public class ActorMovement : MonoBehaviour {
	Rigidbody2D rb;
	public float speed;
	public int direction;
	public bool moving;

	void Start ()
	{
		rb = GetComponent<Rigidbody2D>();
	}

	public void ReceiveMovementInput (float horizontal, float vertical)
	{
		SetDirection(horizontal, vertical);
		if (horizontal != 0 || vertical != 0)
		{
			moving = true;
			Move(VectorFromDirection());
		}
		else
		{
			moving = false;
		}
	}

	void SetDirection (float horizontal, float vertical)
	{
		if (vertical > 0) direction = 0;
		if (vertical < 0) direction = 2;
		if (horizontal > 0) direction = 1;
		if (horizontal < 0) direction = 3;
	}

	Vector3 VectorFromDirection ()
	{
		if (direction == 0) return Vector2.up;
		if (direction == 1) return Vector2.right;
		if (direction == 2) return Vector2.down;
		else return -Vector2.right;
	}

	void Move (Vector3 movement)
	{
		rb.AddForce(movement * speed);
	}
}
