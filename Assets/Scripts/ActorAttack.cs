using UnityEngine;
using System.Collections;

public class ActorAttack : MonoBehaviour {
	// Rigidbody rb;
	public int direction;
	public Weapon weapon;

	void Start ()
	{
		// rb = GetComponent<Rigidbody>();
	}

	public void ReceiveFireInput (float horizontal, float vertical)
	{
		direction = Utils.DirectionFromVector(horizontal, vertical, direction);
		if (horizontal != 0 || vertical != 0)
		{
			Rotate(direction);
			Fire();
		}
	}

	void Fire ()
	{
		if (weapon != null)
		{
			weapon.Fire();
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

	void Rotate (int newDirection)
	{
		if (newDirection == 0) transform.rotation = Quaternion.Euler(new Vector3(0, 270, 0));
		if (newDirection == 1) transform.rotation = Quaternion.Euler(new Vector3(0, 0, 0));
		if (newDirection == 2) transform.rotation = Quaternion.Euler(new Vector3(0, 90, 0));
		if (newDirection == 3) transform.rotation = Quaternion.Euler(new Vector3(0, 180, 0));
	}
}
