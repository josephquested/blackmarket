using UnityEngine;
using System.Collections;

public class Bullet : MonoBehaviour
{
	public float force;

	void OnTriggerEnter (Collider collider)
	{
		if (collider.gameObject.GetComponent<Rigidbody>() != null)
		{
			collider.gameObject.GetComponent<Rigidbody>().AddForce(
				transform.right * force
			);
			Destroy(gameObject);
		}
	}
}
