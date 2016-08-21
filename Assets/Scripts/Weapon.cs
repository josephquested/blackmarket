using UnityEngine;
using System.Collections;

public class Weapon : MonoBehaviour
{
	AudioSource audioSource;
	public GameObject bulletPrefab;
	public Transform bulletSpawn;
	public float bulletSpeed;
	public MuzzleFlash muzzleFlash;
	public AudioClip fireAudioClip1;
	public AudioClip fireAudioClip2;

	void Start ()
	{
		audioSource = GetComponent<AudioSource>();
	}

	public void Fire ()
	{
		GameObject bullet = (GameObject)Instantiate(
			bulletPrefab,
			bulletSpawn.position,
			bulletSpawn.rotation
		);
		bullet.GetComponent<Rigidbody>().AddForce(transform.right * bulletSpeed);
		muzzleFlash.Flash();
		FireAudio();
	}

	void FireAudio ()
	{
		if (audioSource.clip == fireAudioClip2) audioSource.clip = fireAudioClip1;
		else audioSource.clip = fireAudioClip2;
		print(Random.Range(0, 1));
		audioSource.Play();
	}
}
