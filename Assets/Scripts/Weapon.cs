using UnityEngine;
using System.Collections;

public class Weapon : MonoBehaviour
{
	public GameObject bulletPrefab;
	public Transform bulletSpawn;
	public float bulletSpeed;

	public void Fire ()
	{
		GameObject bullet = (GameObject)Instantiate(
			bulletPrefab,
			bulletSpawn.position,
			bulletSpawn.rotation
		);
		bullet.GetComponent<Rigidbody>().AddForce(transform.right * bulletSpeed);
	}
}
