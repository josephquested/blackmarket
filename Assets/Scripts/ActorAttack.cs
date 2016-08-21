using UnityEngine;
using System.Collections;

public class ActorAttack : MonoBehaviour {
	Rigidbody rb;
	public int direction;
	public float recoil;
	public Weapon weapon;

	void Start ()
	{
		rb = GetComponent<Rigidbody>();
	}

	public void ReceiveFireInput (float horizontal, float vertical)
	{
		if (horizontal != 0 || vertical != 0)
		{
			int newDirection = Utils.DirectionFromVector(horizontal, vertical, direction);
			if (newDirection == direction) Fire();
			else
			{
				direction = newDirection;
				Rotate(direction);
			}
		}
	}

	void Fire ()
	{
		if (weapon != null)
		{
			Recoil();
			weapon.Fire();
		}
	}

	void Recoil ()
	{
		rb.AddForce(-transform.right * recoil);
	}

	void Rotate (int newDirection)
	{
		if (newDirection == 0) transform.rotation = Quaternion.Euler(new Vector3(0, 270, 0));
		if (newDirection == 1) transform.rotation = Quaternion.Euler(new Vector3(0, 0, 0));
		if (newDirection == 2) transform.rotation = Quaternion.Euler(new Vector3(0, 90, 0));
		if (newDirection == 3) transform.rotation = Quaternion.Euler(new Vector3(0, 180, 0));
	}
}
